import React from 'react'
import { cn } from '@bem-react/classname'

import { WallItem, Avatar } from '../../components'
import { IconHeartRegular, IconCommentRegular } from '../../icons'
import { Link } from '../../UI'
import { dateToString } from '../../utils'
import './WallPost.css'

const cnWallPost = cn('WallPost')

export function WallPost({ className, id, author, counters, createdAt, children, ...props }) {
  author.info = dateToString(createdAt)

  return (
    <WallItem
      className={cnWallPost({}, [className])}
      to={`/post-${id}`}
      header={<WallPostAuthor {...author} />}
      footer={
        <div className={cnWallPost('Buttons')}>
          <WallPostButton icon={<IconHeartRegular />}>{counters.likes}</WallPostButton>
          <WallPostButton icon={<IconCommentRegular />}>{counters.comments}</WallPostButton>
        </div>
      }
    >
      <div className={cnWallPost('Text')}>{children}</div>
      <hr className={cnWallPost('Sep')} />
    </WallItem>
  )
}

// Автор поста
export function WallPostAuthor(user) {
  const { id, avatar, fullName, info, ...props } = user

  return (
    <Link to={`/id${id}`} {...props} className={cnWallPost('Author')}>
      <Avatar className={cnWallPost('AuthorImage')} user={user} alt={fullName} />
      <div className={cnWallPost('AuthorContent')}>
        <div className={cnWallPost('AuthorName')}>{fullName}</div>
        <div className={cnWallPost('AuthorInfo')}>{info}</div>
      </div>
    </Link>
  )
}

// Кнопки реакций на пост
export function WallPostButton({ icon, children, ...props }) {
  return (
    <div {...props} className={cnWallPost('Button')}>
      <div className={cnWallPost('ButtonIcon')}>{icon}</div>
      {!!children && children}
    </div>
  )
}
