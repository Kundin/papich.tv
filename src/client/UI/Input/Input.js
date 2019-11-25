import React, { forwardRef } from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './Input.css'

const cnInput = cn('Input')

export const Input = forwardRef(({ className, wide, error, autoComplete, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      autoComplete={autoComplete}
      className={cnInput({ wide, error }, [className])}
    />
  )
})

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.string,
  wide: PropTypes.bool,
  error: PropTypes.bool,
  autoComplete: PropTypes.oneOf(['on', 'off']),
}

Input.defaultProps = {
  wide: false,
  error: false,
  autoComplete: 'off',
}
