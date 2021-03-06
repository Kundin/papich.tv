import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './Icon.css'

const cnIcon = cn('Icon')

Icon.propTypes = {
  className: PropTypes.string,
  baseSize: PropTypes.number,
  viewBox: PropTypes.string,
  children: PropTypes.node,
}

Icon.defaultProps = {
  baseSize: 24,
  viewBox: '0 0 512 512',
}

export function Icon({ className, baseSize, viewBox, children, ...props }) {
  const matches = viewBox.match(/^(\d{0,3}) (\d{0,3}) (\d{0,3}) (\d{0,3})$/)
  const coef = Number(matches[3]) / Number(matches[4])
  const width = baseSize * coef
  const height = baseSize

  return (
    <svg
      {...props}
      className={cnIcon({}, [className])}
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={`${width}px`}
      height={`${height}px`}
    >
      {children}
    </svg>
  )
}
