import React from 'react'
import { cn } from '@bem-react/classname'

import './ErrorPage.css'

const cnErrorPage = cn('ErrorPage')

export function ErrorPage({ className, text = 'Произошла какая-то ошибка.' }) {
  return <div className={cnErrorPage({}, [className])}>{text}</div>
}
