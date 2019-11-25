import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import { YouTubePlayer } from '../../components'
import { IconTimesCircleSolid } from '../../icons'
import './AttachYouTube.css'

const cnAttachYouTube = cn('AttachYouTube')

AttachYouTube.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
}

export function AttachYouTube({ className, url, onRemove }) {
  return (
    <div className={cnAttachYouTube({}, [className])}>
      <YouTubePlayer className={cnAttachYouTube('Player')} url={url} />
      <div className={cnAttachYouTube('Remove')}>
        <IconTimesCircleSolid className={cnAttachYouTube('RemoveIcon')} onClick={onRemove} />
      </div>
    </div>
  )
}
