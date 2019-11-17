import React from 'react'
import { cn } from '@bem-react/classname'

import { Pad } from '../../components'
import './PageCreatePost.css'

const cnPageCreatePost = cn('PageCreatePost')

export function PageCreatePost() {
  return (
    <div className={cnPageCreatePost()}>
      <Pad padding="s">Form</Pad>
    </div>
  )
}
