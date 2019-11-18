import React from 'react'
import { cn } from '@bem-react/classname'
import { useParams } from 'react-router-dom'

import { WallPost, PreloaderPage } from '../../components'
import { usePost } from '../../graphql/hooks'
import './PagePost.css'

const cnPagePost = cn('PagePost')

export function PagePost() {
  const { postId } = useParams()
  const {
    data: { post },
    loading,
  } = usePost({ id: postId })

  return loading ? (
    <PreloaderPage />
  ) : (
    <div className={cnPagePost()}>
      <WallPost {...post}>{post.text}</WallPost>
    </div>
  )
}
