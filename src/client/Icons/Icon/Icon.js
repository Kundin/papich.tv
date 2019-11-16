import React from 'react'
import { cn } from '@bem-react/classname'

import './Icon.css'

const cnIcon = cn('Icon')

export function Icon({
  className,
  width = 24,
  height = 24,
  viewBox = '0 0 512 512',
  children,
  ...props
}) {
  return (
    <svg
      {...props}
      className={cnIcon({}, [className])}
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
    >
      {children}
    </svg>
  )
}
