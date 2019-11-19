import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { cn } from '@bem-react/classname'

import './Link.css'

const cnLink = cn('Link')

export function Link({ className, to, external, children, ...props }) {
  return external ? (
    <a {...props} className={cnLink({}, [className])} href={to} rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <HashLink {...props} className={cnLink({}, [className])} to={to}>
      {children}
    </HashLink>
  )
}
