import React from 'react'
import { cn } from '@bem-react/classname'

import { Link } from '../../UI'
import { getFullUrlAuthVK } from '../../../config'
import './PageLogin.css'

const cnPageLogin = cn('PageLogin')

export function PageLogin() {
  return (
    <div className={cnPageLogin()}>
      <h1 className={cnPageLogin('Title')}>Papich.tv</h1>
      <div className={cnPageLogin('Text')}>
        Для большинства функций на сайте нужен аккаунт, а самый быстрый и безопасный способ его
        получить — войти через ВКонтакте.
      </div>

      <Link external to={getFullUrlAuthVK()}>
        Войти через ВКонтакте
      </Link>
    </div>
  )
}
