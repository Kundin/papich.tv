import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './WallItem.css'

const cnWallItem = cn('WallItem')

WallItem.propTypes = {
  className: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired,
}

export function WallItem({ className, header, footer, children, ...props }) {
  return (
    <div {...props} className={cnWallItem({}, [className])}>
      {header && <div className={cnWallItem('Header')}>{header}</div>}

      <div className={cnWallItem('Content')}>{children}</div>

      {footer && <div className={cnWallItem('Footer')}>{footer}</div>}
    </div>
  )
}
