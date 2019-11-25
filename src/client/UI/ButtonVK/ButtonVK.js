import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './ButtonVK.css'

const cnButtonVK = cn('ButtonVK')

ButtonVK.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  wide: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
}

ButtonVK.defaultProps = {
  type: 'button',
}

export function ButtonVK({ type, className, wide, loading, children, ...props }) {
  return (
    <button {...props} type={type} className={cnButtonVK({ wide, loading }, [className])}>
      {children}
    </button>
  )
}
