import { useState, useEffect } from 'react'

export default function ShortcutError() {
  const [ mounted, setMounted ] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return <a href="/" className="btn-transparent btn-primary">
        Tap to go home →
      </a>
    }

    return <a href="/" className="btn-transparent btn-primary">
      Press <kbd>G</kbd> <kbd>H</kbd> to go home →
    </a>
  }

  return <div />
}