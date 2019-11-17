import React from 'react'
import { cn } from '@bem-react/classname'

import { Link } from '../../UI'
import './Pad.css'

const cnPad = cn('Pad')

export function Pad({ className, title, corner, padding, children, ...props }) {
  return (
    <div {...props} className={cnPad({}, [className])}>
      {title && (
        <div className={cnPad('Header')}>
          <h3 className={cnPad('Title')}>{title}</h3>
          {corner && (
            <Link to={corner.link} className={cnPad('Corner')}>
              {corner.text}
            </Link>
          )}
        </div>
      )}

      <div className={cnPad('Content', { padding })}>{children}</div>
    </div>
  )
}
