import React, { useState, useEffect } from 'react'
import { cn } from '@bem-react/classname'
import ReactPlayer from 'react-player'

import './YouTubePlayer.css'

const cnYouTubePlayer = cn('YouTubePlayer')

export function YouTubePlayer({ className, ...props }) {
  const opts = {
    width: '375',
    height: 'auto',
    playerVars: {
      autoplay: 1,
    },
  }
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(document.querySelector('.App').offsetWidth)

    window.addEventListener('resize', () => {
      setWidth(document.querySelector('.App').offsetWidth)
    })
  }, [width])

  return (
    <ReactPlayer
      {...props}
      className={cnYouTubePlayer({}, [className])}
      controls
      light
      width={`${width}px`}
      height={`calc(${width}px / 1.76886792453)`}
    />
  )
}
