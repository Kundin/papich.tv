import React from 'react'
import { cn } from '@bem-react/classname'
import { useMutation } from '@apollo/react-hooks'

import { WallItem, Avatar } from '../../components'
import { IconHeartRegular, IconHeartSolid, IconCommentRegular } from '../../icons'
import { Link } from '../../UI'
import { dateToString } from '../../utils'
import { ADD_POST_LIKE } from '../../graphql/mutations'
import './WallPost.css'

const cnWallPost = cn('WallPost')

export function WallPost({ className, id, author, counters, hasLike, createdAt, children }) {
  const [addPostLike, { data, loading }] = useMutation(ADD_POST_LIKE)

  author.info = (
    <Link to={`/post-${id}`} className={cnWallPost('AuthorInfo')}>
      {dateToString(createdAt)}
    </Link>
  )

  // Клик на лайк
  function onLike(e) {
    e.preventDefault()

    addPostLike({ variables: { id } })
  }

  return (
    <WallItem
      className={cnWallPost({}, [className])}
      header={<WallPostAuthor {...author} />}
      footer={
        <div className={cnWallPost('Buttons')}>
          <WallPostButton
            to="/like"
            icon={hasLike ? <IconHeartSolid /> : <IconHeartRegular />}
            active={hasLike}
            onClick={onLike}
          >
            {counters.likes}
          </WallPostButton>
          <WallPostButton to={`/post-${id}#comments`} icon={<IconCommentRegular />}>
            {counters.comments}
          </WallPostButton>
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
  const { vkId, avatar, fullName, info } = user

  return (
    <div className={cnWallPost('Author')}>
      <Link to={`/id${vkId}`} className={cnWallPost('AuthorAvatar')}>
        <Avatar user={user} alt={fullName} />
      </Link>
      <div className={cnWallPost('AuthorContent')}>
        <Link to={`/id${vkId}`}>
          <div className={cnWallPost('AuthorName')}>{fullName}</div>
        </Link>
        {info}
      </div>
    </div>
  )
}

// Кнопки реакций на пост
export function WallPostButton({ icon, children, active = false, ...props }) {
  return (
    <Link {...props} className={cnWallPost('Button', { active })}>
      <div className={cnWallPost('ButtonIcon')}>{icon}</div>
      {!!children && children}
    </Link>
  )
}
