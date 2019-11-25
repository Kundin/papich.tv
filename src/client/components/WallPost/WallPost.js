import React from 'react'
import { cn } from '@bem-react/classname'
import { useMutation } from '@apollo/react-hooks'
import TextTruncate from 'react-text-truncate'
import PropTypes from 'prop-types'

import { WallItem, Avatar, YouTubePlayer, Poll } from '../../components'
import { IconHeartRegular, IconHeartSolid, IconCommentRegular } from '../../icons'
import { Link } from '../../UI'
import { dateToString } from '../../utils'
import { ADD_POST_LIKE } from '../../graphql'
import './WallPost.css'

const cnWallPost = cn('WallPost')

WallPost.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  title: PropTypes.string,
  attachments: PropTypes.array,
  counters: PropTypes.object.isRequired,
  hasLike: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  unfolded: PropTypes.bool,
  children: PropTypes.node,
}

WallPost.defaultProps = {
  unfolded: false,
}

export function WallPost({
  className,
  id,
  author,
  title,
  attachments,
  counters,
  hasLike,
  createdAt,
  unfolded,
  children,
}) {
  const [addPostLike] = useMutation(ADD_POST_LIKE)

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
      {(title || children) && (
        <Link to={`/post-${id}`} className={cnWallPost('Content')}>
          {title && <h2 className={cnWallPost('Title')}>{title}</h2>}

          {children && (
            <div className={cnWallPost('Text', { unfolded })}>
              {unfolded ? children : <TextTruncate line={4} text={children} />}
            </div>
          )}
        </Link>
      )}

      {attachments.length > 0 ? (
        <div className={cnWallPost('Attaches')}>
          {attachments.map(({ id, type, body }) => {
            switch (type) {
              case 'photo':
                return (
                  <img key={id} className={cnWallPost('Attach')} src={body.src} alt={title || ''} />
                )

              case 'youtube':
                return (
                  <YouTubePlayer
                    key={id}
                    url={body.url}
                    playing={unfolded}
                    light={!unfolded}
                    controls={true}
                  />
                )

              case 'poll':
                return <Poll key={id} className={cnWallPost('Poll')} {...body} />

              default:
                return null
            }
          })}
        </div>
      ) : (
        <hr className={cnWallPost('Sep')} />
      )}
    </WallItem>
  )
}

// Автор поста
WallPostAuthor.propTypes = {
  vkId: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  info: PropTypes.node,
}

export function WallPostAuthor(user) {
  const { vkId, fullName, info } = user

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
WallPostButton.propTypes = {
  icon: PropTypes.element.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
}

WallPostButton.defaultProps = {
  active: false,
}

export function WallPostButton({ icon, children, active, ...props }) {
  return (
    <Link {...props} className={cnWallPost('Button', { active })}>
      <div className={cnWallPost('ButtonIcon')}>{icon}</div>
      {!!children && children}
    </Link>
  )
}
