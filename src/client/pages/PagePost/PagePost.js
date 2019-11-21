import React from 'react'
import { cn } from '@bem-react/classname'
import { useParams } from 'react-router-dom'
import loadable from '@loadable/component'

import { WallPost, PreloaderPage, AddComment, Pad, Comment } from '../../components'
import { usePost, useMe, useComments } from '../../graphql'
import './PagePost.css'

const PageNotFound = loadable(() => import('../../pages/PageNotFound/default'))

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
  ) : post ? (
    <div className={cnPagePost()}>
      <WallPost {...post} className={cnPagePost('Post')}>
        {post.text}
      </WallPost>

      {me && <AddComment post={post} user={me} className={cnPagePost('AddComment')} />}

      {comments.length > 0 && (
        <Pad className={cnPagePost('Comments')}>
          <a id="comments" />
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </Pad>
      )}
    </div>
  ) : (
    <PageNotFound />
  )
}
