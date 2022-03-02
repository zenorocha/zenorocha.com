import React, { useState, useRef } from 'react'
import { styled } from '../stitches.config'

export default function Pronunciation() {
  const pronunciationAudio = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePronunciation = () => {
    if (
      pronunciationAudio.current !== null &&
      pronunciationAudio.current.duration > 0 &&
      !pronunciationAudio.current.paused
    ) {
      setIsPlaying(false)
      pronunciationAudio.current.pause()
    } else {
      setIsPlaying(true)
      pronunciationAudio.current.play()
    }
  }

  return (
    <Button
      role="button"
      aria-label="How to pronounce my name"
      onClick={togglePronunciation}
    >
      <Icon
        className={`ri-${isPlaying ? 'pause' : 'play' }-circle-fill`}
      />
      <audio
        src="/static/audio/pronunciation.mp3"
        ref={pronunciationAudio}
        onEnded={() => setIsPlaying(false)}
      />
    </Button>
  )
}

const Button = styled('button', {
  background: 'transparent',
  border: 'none',
  color: '$primary',
  cursor: 'pointer',
  margin: '0 4px',
  padding: '0',
  position: 'relative',
  top: '5px',
  transform: 'none',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': { transform: 'scale(1.1) translateZ(0)' },
})

const Icon = styled('i', {
  fontSize: '24px',
  lineHeight: '32px'
})