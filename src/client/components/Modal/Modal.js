import React, { useRef } from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import { IconTimesCircleSolid } from '../../icons'
import { useOnClickOutside } from '../../hooks'
import './Modal.css'

const cnModal = cn('Modal')

Modal.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  visible: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  visible: false,
}

export function Modal({ className, title, visible, children, onClose, ...props }) {
  const refBody = useRef()

  // Закрываем модальное окно по клику вне его тела
  useOnClickOutside(refBody, onClose)

  return (
    <div {...props} className={cnModal({ visible }, [className])}>
      <div ref={refBody} className={cnModal('Body')}>
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
