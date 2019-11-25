import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './Button.css'

const cnButton = cn('Button')

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  wide: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
}

Button.defaultProps = {
  type: 'button',
}

export function Button({ type, className, wide, loading, children, ...props }) {
  return (
    <button {...props} type={type} className={cnButton({ wide, loading }, [className])}>
      {children}
    </button>
  )
}
