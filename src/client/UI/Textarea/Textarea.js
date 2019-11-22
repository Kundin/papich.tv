import React, { forwardRef } from 'react'
import { cn } from '@bem-react/classname'

import './Textarea.css'

const cnTextarea = cn('Textarea')

export const Textarea = forwardRef(({ className, ...props }, ref) => {
  return <textarea {...props} ref={ref} className={cnTextarea({}, [className])} />
})
