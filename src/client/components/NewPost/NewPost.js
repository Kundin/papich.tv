import React from 'react'
import { cn } from '@bem-react/classname'

import { Pad, Avatar } from '../../components'
import './NewPost.css'

const cnNewPost = cn('NewPost')

export function NewPost({ className, user, ...props }) {
  return (
    <div {...props} className={cnNewPost({}, [className])}>
      <Pad>
        <Avatar className={cnNewPost('Avatar')} user={user} />
        <div className={cnNewPost('Text')}>Напишите что-нибудь…</div>
      </Pad>
    </div>
  )
}
