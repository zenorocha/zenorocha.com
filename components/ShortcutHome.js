import { useState, useEffect } from 'react'
import { useKBar } from 'kbar'

export default function ShortcutHome() {
  const { query } = useKBar()
  const [ mounted, setMounted ] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return <button className="btn-transparent btn-primary" onClick={query.toggle}>
        Tap to start →
      </button>
    }
    else if (isMac) {
      return <button className="btn-transparent btn-primary" onClick={query.toggle}>
        Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
      </button>
    }
    else {
      return <button className="btn-transparent btn-primary" onClick={query.toggle}>
        Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
      </button>
    }
  }

  return <div />
}