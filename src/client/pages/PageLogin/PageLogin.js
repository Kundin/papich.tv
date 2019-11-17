import React from 'react'
import { cn } from '@bem-react/classname'

import './PageLogin.css'

const cnPageLogin = cn('PageLogin')

export function PageLogin() {
  return <div className={cnPageLogin()}>Login</div>
}
