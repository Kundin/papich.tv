import React from 'react'
import { cn } from '@bem-react/classname'

import { YouTubePlayer } from '../../components'
import { IconTimesCircleSolid } from '../../icons'
import './AttachYouTube.css'

const cnAttachYouTube = cn('AttachYouTube')

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
