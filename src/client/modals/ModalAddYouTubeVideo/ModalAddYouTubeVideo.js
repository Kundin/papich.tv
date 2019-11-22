import React from 'react'
import { cn } from '@bem-react/classname'

import { Modal } from '../../components'
import './ModalAddYouTubeVideo.css'

const cnModalAddYouTubeVideo = cn('ModalAddYouTubeVideo')

export function ModalAddYouTubeVideo({ className, ...props }) {
  return (
    <Modal
      {...props}
      title="Добавить видео с YouTube"
      className={cnModalAddYouTubeVideo({}, [className])}
    >
      <div className={cnModalAddYouTubeVideo('Content')}>ModalAddYouTubeVideo</div>
    </Modal>
  )
}
