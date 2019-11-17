import React, { Fragment } from 'react'
import { cn } from '@bem-react/classname'

import './WallItem.css'

const cnWallItem = cn('WallItem')

export function WallItem({ className, header, footer, children, ...props }) {
  return (
    <div {...props} className={cnWallItem({}, [className])}>
      {header && <div className={cnWallItem('Header')}>{header}</div>}

      <div className={cnWallItem('Content')}>{children}</div>

      {footer && <div className={cnWallItem('Footer')}>{footer}</div>}
    </div>
  )
}
