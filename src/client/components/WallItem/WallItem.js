import React, { Fragment } from 'react'
import { cn } from '@bem-react/classname'

import { Link } from '../../UI'
import './WallItem.css'

const cnWallItem = cn('WallItem')

export function WallItem({ className, to, header, footer, children, ...props }) {
  const Children = (
    <Fragment>
      {header && <div className={cnWallItem('Header')}>{header}</div>}

      <div className={cnWallItem('Content')}>{children}</div>

      {footer && <div className={cnWallItem('Footer')}>{footer}</div>}
    </Fragment>
  )

  return to ? (
    <Link {...props} to={to} className={cnWallItem({}, [className])}>
      {Children}
    </Link>
  ) : (
    <div {...props} className={cnWallItem({}, [className])}>
      {Children}
    </div>
  )
}
