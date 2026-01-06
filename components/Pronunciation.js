import { useRef, useState } from 'react';

export default function Pronunciation() {
  const pronunciationAudio = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePronunciation = () => {
    if (
      pronunciationAudio.current !== null &&
      pronunciationAudio.current.duration > 0 &&
      !pronunciationAudio.current.paused
    ) {
      setIsPlaying(false);
      pronunciationAudio.current.pause();
    } else {
      setIsPlaying(true);
      pronunciationAudio.current.play();
    }
  };

  return (
    <button
      type="button"
      aria-label="How to pronounce my name"
      onClick={togglePronunciation}
      className="text-primary relative top-1.25 mx-1 transform-none cursor-pointer border-none bg-transparent p-0 transition-transform duration-200 ease-in-out hover:translate-z-0 hover:scale-110"
    >
      <i
        className={`ri-${isPlaying ? 'pause' : 'play'}-circle-fill text-2xl leading-8`}
      />
      <audio
        src="/static/audio/pronunciation.mp3"
        ref={pronunciationAudio}
        onEnded={() => setIsPlaying(false)}
      >
        <track kind="captions" />
      </audio>
    </button>
  );
}
