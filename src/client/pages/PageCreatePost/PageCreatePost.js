import React from 'react'
import { cn } from '@bem-react/classname'

import './PageCreatePost.css'

const cnPageCreatePost = cn('PageCreatePost')

export function PageCreatePost() {
  return <div className={cnPageCreatePost()}>Create Post</div>
}
