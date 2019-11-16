import React from 'react'
import { cn } from '@bem-react/classname'

import './WrapperMain.css'

const cnWrapperMain = cn('WrapperMain')

export function WrapperMain({ className, children, ...props }) {
  return (
    <div {...props} className={cnWrapperMain({}, [className])}>
      {children}
    </div>
  )
}
