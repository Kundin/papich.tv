import React from 'react'
import { cn } from '@bem-react/classname'

import './ButtonVK.css'

const cnButtonVK = cn('ButtonVK')

export function ButtonVK({ type = 'button', className, children, wide, loading, ...props }) {
  return (
    <button {...props} type={type} className={cnButtonVK({ wide, loading }, [className])}>
      {children}
    </button>
  )
}
