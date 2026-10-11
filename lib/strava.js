import { unstable_cache } from 'next/cache';

const API_URL = 'https://www.strava.com/api/v3';

// Strava access tokens expire every 6 hours, so we exchange
// the long-lived refresh token for a new one on every revalidation
async function getAccessToken() {
  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token'
    })
  });

  if (!response.ok) {
    throw new Error(`Strava token request failed: ${response.status}`);
  }

  const { access_token } = await response.json();
  return access_token;
}

async function request(path, token) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!response.ok) {
    throw new Error(`Strava request to ${path} failed: ${response.status}`);
  }

  return response.json();
}

async function getAllRuns(token) {
  const runs = [];

  for (let page = 1; ; page++) {
    const activities = await request(
      `/athlete/activities?per_page=200&page=${page}`,
      token
    );

    runs.push(...activities.filter((a) => a.sport_type === 'Run'));

    if (activities.length < 200) {
      return runs;
    }
  }
}

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = String(seconds % 60).padStart(2, '0');

  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${s}` : `${m}:${s}`;
}

// Cache the whole lookup as one unit so a stale access token
// is never reused against fresh activity requests
const getCachedStats = unstable_cache(
  async () => {
    const token = await getAccessToken();
    const athlete = await request('/athlete', token);
    const [totals, runs] = await Promise.all([
      request(`/athletes/${athlete.id}/stats`, token),
      getAllRuns(token)
    ]);

    const year = new Date().getFullYear();
    const longest = Math.max(...runs.map((run) => run.distance));

    // workout_type 1 means the run was marked as a race on Strava
    const fastest10k = runs
      .filter((run) => run.workout_type === 1)
      .filter((run) => run.distance >= 9900 && run.distance <= 10500)
      .sort((a, b) => a.moving_time - b.moving_time)[0];

    return [
      {
        label: `Kilometers in ${year}`,
        value: Math.round(totals.ytd_run_totals.distance / 1000).toLocaleString(
          'en-US'
        )
      },
      {
        label: `Runs in ${year}`,
        value: totals.ytd_run_totals.count.toLocaleString('en-US')
      },
      { label: 'Longest run', value: `${Math.round(longest / 1000)} km` },
      fastest10k
        ? { label: '10K race', value: formatDuration(fastest10k.moving_time) }
        : null
    ];
  },
  ['strava-running-stats'],
  { revalidate: 86400 }
);

export async function getRunningStats(fallback) {
  if (
    !process.env.STRAVA_CLIENT_ID ||
    !process.env.STRAVA_CLIENT_SECRET ||
    !process.env.STRAVA_REFRESH_TOKEN
  ) {
    return fallback;
  }

  try {
    const stats = await getCachedStats();

    // Keep the static value for any stat Strava couldn't provide
    return stats.map((stat, index) => stat ?? fallback[index]);
  } catch (error) {
    console.error(error);
    return fallback;
  }
}
