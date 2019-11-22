import React from 'react'
import { cn } from '@bem-react/classname'

import './Input.css'

const cnInput = cn('Input')

export function Input({ className, wide, ...props }) {
  return <input {...props} className={cnInput({ wide }, [className])} />
}
