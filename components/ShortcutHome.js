import { useState, useEffect } from 'react'
import { useCommandBar } from '../components/CommandBar'
import { ButtonPrimary } from '../components/ButtonPrimary'

export default function ShortcutHome() {
  const { toggle } = useCommandBar()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return (
        <ButtonPrimary as="button" onClick={toggle}>
          Tap to start →
        </ButtonPrimary>
      )
    } else if (isMac) {
      return (
        <ButtonPrimary as="button" onClick={toggle}>
          Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      )
    } else {
      return (
        <ButtonPrimary as="button" onClick={toggle}>
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      )
    }
  }

  return <div />
}
