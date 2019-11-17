import React from 'react'
import { cn } from '@bem-react/classname'

import './PageDonate.css'

const cnPageDonate = cn('PageDonate')

export function PageDonate() {
  return <div className={cnPageDonate()}>Donate</div>
}
