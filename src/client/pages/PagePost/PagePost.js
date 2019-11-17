import React from 'react'
import { cn } from '@bem-react/classname'
import { useParams } from 'react-router-dom'

import { WallPost } from '../../components'
import posts from '../posts'
import './PagePost.css'

const cnPagePost = cn('PagePost')

export function PagePost() {
  const { postId } = useParams()
  const post = findPost(postId)

  return (
    <div className={cnPagePost()}>
      <WallPost {...post}>{post.text}</WallPost>
    </div>
  )
}

function findPost(id) {
  return posts.find((post) => post.id === Number(id))
}
