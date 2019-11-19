import React from 'react'
import { cn } from '@bem-react/classname'
import { useParams } from 'react-router-dom'

import { WallPost, PreloaderPage, AddComment, Pad, Comment } from '../../components'
import { usePost, useMe, useComments } from '../../graphql/hooks'
import './PagePost.css'

const cnPagePost = cn('PagePost')

export function PagePost() {
  const { postId } = useParams()
  const {
    data: { me },
  } = useMe()
  const {
    data: { post },
    loading: loadingPost,
  } = usePost({ id: postId })
  const {
    data: { comments },
    loading: loadingComments,
  } = useComments({ postId })

  return loadingPost || loadingComments ? (
    <PreloaderPage />
  ) : (
    <div className={cnPagePost()}>
      <WallPost {...post}>{post.text}</WallPost>

      <AddComment post={post} user={me} />

      {comments.length > 0 && (
        <Pad className={cnPagePost('Comments')}>
          <a id="comments" />
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </Pad>
      )}
    </div>
  )
}
