import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './WrapperMain.css'

const cnWrapperMain = cn('WrapperMain')

WrapperMain.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export function WrapperMain({ className, children, ...props }) {
  return (
    <div {...props} className={cnWrapperMain({}, [className])}>
      {children}
    </div>
  )
}
