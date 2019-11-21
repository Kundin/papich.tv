import React from 'react'
import { cn } from '@bem-react/classname'

import { IconTimesCircleSolid } from '../../icons'
import './AttachPhoto.css'

const cnAttachPhoto = cn('AttachPhoto')

export function AttachPhoto({ className, src, onRemove }) {
  return (
    <div className={cnAttachPhoto({}, [className])}>
      <img className={cnAttachPhoto('Photo')} src={src} />
      <div className={cnAttachPhoto('Remove')}>
        <IconTimesCircleSolid className={cnAttachPhoto('RemoveIcon')} onClick={onRemove} />
      </div>
    </div>
  )
}
