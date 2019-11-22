import React from 'react'
import { cn } from '@bem-react/classname'
import { Helmet } from 'react-helmet'

import './PageNotFound.css'

const cnPageNotFound = cn('PageNotFound')

export function PageNotFound() {
  return (
    <div className={cnPageNotFound()}>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>

      <span>У нас не нашлось страницы по данному адресу.</span>
    </div>
  )
}
