import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@bem-react/classname'
import ReactPlayer from 'react-player'

import './YouTubePlayer.css'

const cnYouTubePlayer = cn('YouTubePlayer')

export function YouTubePlayer({
  className,
  url,
  placeholder = 'Здесь должно быть видео…',
  ...props
}) {
  const ref = useRef()
  const [width, setWidth] = useState()
  const strWidth = `${width}px`
  const strHeight = `calc(${width}px / 1.76886792453)`

  useEffect(() => {
    setWidth(ref.current.offsetWidth)

    window.addEventListener('resize', () => {
      setWidth(ref.current.offsetWidth)
    })
  }, [width])

  return (
    <div
      ref={ref}
      className={cnYouTubePlayer({}, [className])}
      style={{ width: strWidth, height: strHeight }}
    >
      {url ? (
        <ReactPlayer
          {...props}
          className={cnYouTubePlayer('Player')}
          controls
          light
          width={strWidth}
          height={strHeight}
          url={url}
        />
      ) : (
        <span className={cnYouTubePlayer('Placeholder')}>{placeholder}</span>
      )}
    </div>
  )
}
