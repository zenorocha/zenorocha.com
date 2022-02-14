import { useState, useEffect } from 'react'
import { useKBar } from 'kbar'
import { ButtonPrimary } from '../components/ButtonPrimary'

export default function ShortcutHome() {
  const { query } = useKBar()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return (
        <ButtonPrimary as="button" onClick={query.toggle}>
          Tap to start →
        </ButtonPrimary>
      )
    } else if (isMac) {
      return (
        <ButtonPrimary as="button" onClick={query.toggle}>
          Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      )
    } else {
      return (
        <ButtonPrimary as="button" onClick={query.toggle}>
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      )
    }
  }

  return <div />
}
