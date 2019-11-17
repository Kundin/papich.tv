import React from 'react'
import { cn } from '@bem-react/classname'

import './PageMenu.css'

const cnPageMenu = cn('PageMenu')

export function PageMenu() {
  return <div className={cnPageMenu()}>Menu</div>
}
