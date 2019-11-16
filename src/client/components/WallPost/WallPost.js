import React from 'react'
import { cn } from '@bem-react/classname'

import { WallItem } from '../../components'
import { IconHeartRegular, IconCommentRegular } from '../../icons'
import { dateToString } from '../../utils'
import './WallPost.css'

const cnWallPost = cn('WallPost')

export function WallPost({ className, author, children, ...props }) {
  author.info = dateToString(new Date())

  return (
    <WallItem
      className={cnWallPost({}, [className])}
      header={<WallPostAuthor {...author} />}
      footer={
        <div className={cnWallPost('Buttons')}>
          <WallPostButton icon={<IconHeartRegular />}>12</WallPostButton>
          <WallPostButton icon={<IconCommentRegular />}>3</WallPostButton>
        </div>
      }
    >
      <div className={cnWallPost('Text')}>{children}</div>
      <hr className={cnWallPost('Sep')} />
    </WallItem>
  )
}

// Автор поста
export function WallPostAuthor({ avatar, fullName, info, ...props }) {
  return (
    <div {...props} className={cnWallPost('Author')}>
      <img className={cnWallPost('AuthorImage')} src={avatar} alt={fullName} />
      <div className={cnWallPost('AuthorContent')}>
        <div className={cnWallPost('AuthorName')}>{fullName}</div>
        <div className={cnWallPost('AuthorInfo')}>{info}</div>
      </div>
    </div>
  )
}

// Кнопки реакций на пост
export function WallPostButton({ icon, children, ...props }) {
  return (
    <div {...props} className={cnWallPost('Button')}>
      <div className={cnWallPost('ButtonIcon')}>{icon}</div>
      {children}
    </div>
  )
}
