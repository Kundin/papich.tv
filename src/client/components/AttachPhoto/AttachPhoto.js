import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import { IconTimesCircleSolid } from '../../icons'
import './AttachPhoto.css'

const cnAttachPhoto = cn('AttachPhoto')

AttachPhoto.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
}

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
