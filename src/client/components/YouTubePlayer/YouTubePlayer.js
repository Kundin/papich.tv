import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@bem-react/classname'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

import './YouTubePlayer.css'

const cnYouTubePlayer = cn('YouTubePlayer')

YouTubePlayer.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  controls: PropTypes.bool,
  playing: PropTypes.bool,
  light: PropTypes.bool,
  placeholder: PropTypes.string,
}

YouTubePlayer.defaultProps = {
  controls: false,
  playing: false,
  light: true,
  placeholder: 'Здесь должно быть видео…',
}

export function YouTubePlayer({ className, url, controls, playing, light, placeholder, ...props }) {
  const ref = useRef()
  const [width, setWidth] = useState()
  const strWidth = `${width}px`
  const strHeight = `${width / 1.76886792453}px`

  useEffect(() => {
    calcWidth()

    window.addEventListener('resize', calcWidth)

    return () => window.removeEventListener('resize', calcWidth)
  }, [width])

  // Рассчитать ширину плеера
  function calcWidth() {
    ref && setWidth(ref.current.parentNode.offsetWidth)
  }

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
          controls={controls}
          playing={playing}
          light={light}
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
