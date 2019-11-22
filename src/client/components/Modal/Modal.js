import React from 'react'
import { cn } from '@bem-react/classname'

import { IconTimesCircleSolid } from '../../icons'
import './Modal.css'

const cnModal = cn('Modal')

export function Modal({ className, title, visible = false, children, onClose, ...props }) {
  //
  function onClickClose(e) {
    onClose && onClose(e)
  }

  return (
    <div {...props} className={cnModal({ visible }, [className])}>
      <div className={cnModal('Body')}>
        {/* Шапка */}
        <div className={cnModal('Header')}>
          <h2 className={cnModal('Title')}>{title}</h2>
          <IconTimesCircleSolid className={cnModal('Close')} onClick={onClose} />
        </div>

        {/* Контент */}
        <div className={cnModal('Content')}>{children}</div>
      </div>
    </div>
  )
}
