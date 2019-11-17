import React from 'react'
import { cn } from '@bem-react/classname'

import './PageUser.css'

const cnPageUser = cn('PageUser')

export function PageUser() {
  return <div className={cnPageUser()}>User</div>
}
