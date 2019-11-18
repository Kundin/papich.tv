import React from 'react'
import { cn } from '@bem-react/classname'

import './ButtonAction.css'

const cnButtonAction = cn('ButtonAction')

export function ButtonAction({ type = 'button', className, children, wide, loading, ...props }) {
  return (
    <button {...props} type={type} className={cnButtonAction({ wide, loading }, [className])}>
      {children}
    </button>
  )
}
