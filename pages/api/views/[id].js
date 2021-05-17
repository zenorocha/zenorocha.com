const { google } = require('googleapis');

const scopes = 'https://www.googleapis.com/auth/analytics.readonly';
const auth = require('../../../auth.json');
const jwt = new google.auth.JWT(auth.client_email, null, auth.private_key, scopes);
const view_id = '19337095';

async function getData(id) {
  const response = await jwt.authorize();
  const result = await google.analytics('v3').data.ga.get({
    'auth': jwt,
    'ids': 'ga:' + view_id,
    'start-date': '2009-07-02',
    'end-date': 'today',
    'metrics': 'ga:pageviews',
    'dimensions': 'ga:pagePath',
    'filters': `ga:pagePath==/${id}/`,
  });

  return result.data.rows[0][1];
}

export default async ({ query: { id } }, res) => {
  try {
    const views = await getData(id);
    res.status(200).json({ views });
  }
  catch(e) {
    res.status(500).json({ message: e.message })
  }
}