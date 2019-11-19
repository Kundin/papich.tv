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

  author.info = dateToString(createdAt)

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
      <Link to={`/post-${id}`}>
        <div className={cnWallPost('Text')}>{children}</div>
        <hr className={cnWallPost('Sep')} />
      </Link>
    </WallItem>
  )
}

// Автор поста
export function WallPostAuthor(user) {
  const { vkId, avatar, fullName, info } = user

  return (
    <Link to={`/id${vkId}`} className={cnWallPost('Author')}>
      <Avatar className={cnWallPost('AuthorImage')} user={user} alt={fullName} />
      <div className={cnWallPost('AuthorContent')}>
        <div className={cnWallPost('AuthorName')}>{fullName}</div>
        <div className={cnWallPost('AuthorInfo')}>{info}</div>
      </div>
    </Link>
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
