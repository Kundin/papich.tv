import React, { forwardRef } from 'react'
import { cn } from '@bem-react/classname'

import './Input.css'

const cnInput = cn('Input')

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
