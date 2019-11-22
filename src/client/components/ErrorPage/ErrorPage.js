import React from 'react'
import { cn } from '@bem-react/classname'
import { Helmet } from 'react-helmet'

import './ErrorPage.css'

const cnErrorPage = cn('ErrorPage')

export function ErrorPage({ className, text = 'Произошла какая-то ошибка.' }) {
  return (
    <div className={cnErrorPage({}, [className])}>
      <Helmet>
        <title>Ошибка</title>
      </Helmet>
      {text}
    </div>
  )
}
