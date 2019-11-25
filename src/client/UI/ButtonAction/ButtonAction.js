import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './ButtonAction.css'

const cnButtonAction = cn('ButtonAction')

ButtonAction.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  wide: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
}

ButtonAction.defaultProps = {
  type: 'button',
}

export function ButtonAction({ type, className, wide, loading, children, ...props }) {
  return (
    <button {...props} type={type} className={cnButtonAction({ wide, loading }, [className])}>
      {children}
    </button>
  )
}
