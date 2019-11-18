import React from 'react'
import { cn } from '@bem-react/classname'

import './Button.css'

const cnButton = cn('Button')

export function Button({ type = 'button', className, children, wide, loading, ...props }) {
  return (
    <button {...props} type={type} className={cnButton({ wide, loading }, [className])}>
      {children}
    </button>
  )
}
