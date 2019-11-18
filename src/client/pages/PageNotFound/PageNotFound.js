import React from 'react'
import { cn } from '@bem-react/classname'

import './PageNotFound.css'

const cnPageNotFound = cn('PageNotFound')

export function PageNotFound() {
  return <div className={cnPageNotFound()}>У нас не нашлось страницы по данному адресу.</div>
}
