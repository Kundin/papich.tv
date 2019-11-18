import React from 'react'
import { cn } from '@bem-react/classname'

import { IconCogSolid } from '../../icons'
import './PreloaderPage.css'

const cnPreloaderPage = cn('PreloaderPage')

export function PreloaderPage({ className, ...props }) {
  return (
    <div {...props} className={cnPreloaderPage({}, [className])}>
      <IconCogSolid className={cnPreloaderPage('Icon')} />
    </div>
  )
}
