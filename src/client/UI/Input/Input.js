import React, { forwardRef } from 'react'
import { cn } from '@bem-react/classname'

import './Input.css'

const cnInput = cn('Input')

export const Input = forwardRef(({ className, wide, ...props }, ref) => {
  return <input {...props} ref={ref} className={cnInput({ wide }, [className])} />
})
