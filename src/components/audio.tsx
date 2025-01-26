'use client'

import * as React from 'react'
import { Toggle } from "./ui/toggle"
import { Pause, Play } from 'lucide-react'

export function Audio({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const audioRef = React.useRef<HTMLAudioElement>(null)

  React.useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [isPlaying])

  return (
    <>
      <Toggle pressed={isPlaying} onPressedChange={setIsPlaying} className='size-12 rounded-full p-0 bg-primary/20'>
        {isPlaying ? <Pause className='fill-primary stroke-primary' /> : <Play className='fill-primary stroke-primary' />}
        <audio src={src} ref={audioRef} onEnded={() => setIsPlaying(false)} />
      </Toggle>
    </>
  )
}