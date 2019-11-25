import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import { IconCogSolid } from '../../icons'
import './PreloaderPage.css'

const cnPreloaderPage = cn('PreloaderPage')

PreloaderPage.propTypes = {
  className: PropTypes.string,
}

export function PreloaderPage({ className, ...props }) {
  return (
    <div {...props} className={cnPreloaderPage({}, [className])}>
      <IconCogSolid className={cnPreloaderPage('Icon')} />
    </div>
  )
}
