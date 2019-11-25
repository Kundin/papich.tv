import React, { forwardRef } from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './Input.css'

const cnInput = cn('Input')

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.string,
  wide: PropTypes.bool,
  autoComplete: PropTypes.oneOf(['on', 'off']),
}

Input.defaultProps = {
  autoComplete: 'off',
}

export const Input = forwardRef(({ className, wide, autoComplete = 'off', ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      autoComplete={autoComplete}
      className={cnInput({ wide }, [className])}
    />
  )
})
