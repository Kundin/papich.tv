import React from 'react'
import { cn } from '@bem-react/classname'
import { Helmet } from 'react-helmet'

import { Link, ButtonVK } from '../../UI'
import { getFullUrlAuthVK } from '../../../config'
import './PageLogin.css'

const cnPageLogin = cn('PageLogin')

export function PageLogin() {
  return (
    <div className={cnPageLogin()}>
      <Helmet>
        <title>Войти на сайт</title>
      </Helmet>

      <h1 className={cnPageLogin('Title')}>Papich.tv</h1>
      <div className={cnPageLogin('Text')}>
        Для большинства функций на сайте нужен аккаунт, а самый быстрый и безопасный способ его
        получить — войти через ВКонтакте.
      </div>

      <Link external to={getFullUrlAuthVK()} className={cnPageLogin('AuthButton')}>
        <ButtonVK>Войти через ВКонтакте</ButtonVK>
      </Link>
    </div>
  )
}
