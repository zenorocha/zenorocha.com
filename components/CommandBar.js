import { styled } from '../stitches.config'
import { Box } from './Box'
import Toast from './Toast'
import * as React from 'react'
import { useRouter } from 'next/router'
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from 'kbar'

export default function CommandBar(props) {
  const router = useRouter()
  const [showToast, setShowToast] = React.useState(false)

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowToast(true)
  }

  const actions = [
    {
      id: 'copy',
      name: 'Copy URL',
      shortcut: ['u'],
      keywords: 'copy-url',
      section: 'General',
      perform: copyUrl,
      icon: <Icon className="ri-file-copy-line" />,
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'General',
      perform: () => window.open('mailto:zno.rocha@gmail.com', '_blank'),
      icon: <Icon className="ri-mail-line" />,
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'General',
      perform: () =>
        window.open('https://github.com/zenorocha/zenorocha.com', '_blank'),
      icon: <Icon className="ri-braces-line" />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <Icon className="ri-home-5-line" />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <Icon className="ri-user-line" />,
    },
    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['g', 'b'],
      keywords: 'go-articles',
      section: 'Go To',
      perform: () => router.push('/articles'),
      icon: <Icon className="ri-ball-pen-line" />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <Icon className="ri-lightbulb-line" />,
    },
    {
      id: 'talks',
      name: 'Talks',
      shortcut: ['g', 't'],
      keywords: 'go-talks',
      section: 'Go To',
      perform: () => router.push('/talks'),
      icon: <Icon className="ri-slideshow-2-line" />,
    },
    {
      id: 'podcasts',
      name: 'Podcasts',
      shortcut: ['g', 'c'],
      keywords: 'go-podcasts',
      section: 'Go To',
      perform: () => router.push('/podcasts'),
      icon: <Icon className="ri-mic-line" />,
    },
    {
      id: 'investing',
      name: 'Investing',
      shortcut: ['g', 'i'],
      keywords: 'go-investing',
      section: 'Go To',
      perform: () => router.push('/investing'),
      icon: <Icon className="ri-money-dollar-box-line" />,
    },
    {
      id: 'uses',
      name: 'Uses',
      shortcut: ['g', 'u'],
      keywords: 'go-uses',
      section: 'Go To',
      perform: () => router.push('/uses'),
      icon: <Icon className="ri-computer-line" />,
    },
    {
      id: 'reminder',
      name: 'Reminder',
      shortcut: ['g', 'r'],
      keywords: 'go-reminder',
      section: 'Go To',
      perform: () => router.push('/reminder'),
      icon: <Icon className="ri-time-line" />,
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: 'go-github',
      section: 'Follow',
      perform: () => window.open('https://github.com/zenorocha', '_blank'),
      icon: <Icon className="ri-github-line" />,
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['f', 't'],
      keywords: 'go-twitter',
      section: 'Follow',
      perform: () => window.open('https://twitter.com/zenorocha', '_blank'),
      icon: <Icon className="ri-twitter-line" />,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'go-linkedin',
      section: 'Follow',
      perform: () => window.open('https://linkedin.com/in/zenorocha', '_blank'),
      icon: <Icon className="ri-linkedin-line" />,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortcut: ['f', 'i'],
      keywords: 'go-instagram',
      section: 'Follow',
      perform: () => window.open('https://instagram.com/zenorocha', '_blank'),
      icon: <Icon className="ri-instagram-line" />,
    },
  ]

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <Positioner>
            <Animator>
              <Search placeholder="Type a command or search…" />
              <RenderResults />
            </Animator>
          </Positioner>
        </KBarPortal>

        {props.children}
      </KBarProvider>

      <Toast
        title="Copied :D"
        description="You can now share it with anyone."
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  )
}

function RenderResults() {
  const { results } = useDeepMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <GroupName>{item}</GroupName>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

const ResultItem = React.forwardRef(({ action, active }, ref) => {
  return (
    <Box ref={ref} css={getResultStyle(active)}>
      <Action>
        {action.icon && action.icon}
        <ActionRow>
          <span>{action.name}</span>
        </ActionRow>
      </Action>
      {action.shortcut?.length ? (
        <Shortcut aria-hidden>
          {action.shortcut.map(shortcut => (
            <Kbd key={shortcut}>{shortcut}</Kbd>
          ))}
        </Shortcut>
      ) : null}
    </Box>
  )
})

ResultItem.displayName = 'ResultItem'

const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
})

const Search = styled(KBarSearch, {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '$command',
  color: '$primary',
})

const GroupName = styled('div', {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '$command',
})

const Icon = styled('i', {
  fontSize: '20px',
  position: 'relative',
  top: '-2px',
})

const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '$secondary',
  padding: '4px 8px',
  textTransform: 'uppercase',
})

const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
})

const Action = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
})

const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const Animator = styled(KBarAnimator, {
  backgroundColor: '#1a1c1e',
  maxWidth: '600px',
  width: '100%',
  color: '$primary',
  borderRadius: '8px',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '$command',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)',
  },
})

const getResultStyle = active => {
  return {
    padding: '12px 16px',
    background: active ? 'rgba(255, 255, 255, 0.1)' : '$command',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    cursor: 'pointer',
    color: active ? '$primary' : '$secondary',
  }
}
