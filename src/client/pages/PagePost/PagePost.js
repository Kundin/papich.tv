import React from 'react'
import { cn } from '@bem-react/classname'

import './PagePost.css'

const cnPagePost = cn('PagePost')

export function PagePost() {
  return <div className={cnPagePost()}>Post</div>
}
