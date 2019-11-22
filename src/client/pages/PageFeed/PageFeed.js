import React from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import { WallPost, NewPost, PreloaderPage } from '../../components'
import { useMe, useDefaultPosts } from '../../graphql'
import './PageFeed.css'

const cnPageFeed = cn('PageFeed')

export function PageFeed() {
  const {
    data: { me },
  } = useMe()
  const {
    data: { posts = [] },
    loading,
  } = useDefaultPosts()

  return loading ? (
    <PreloaderPage />
  ) : (
    <div className={cnPageFeed()}>
      <Helmet>
        <title>Лента</title>
      </Helmet>

      {me.isAdmin && <NewPost className={cnPageFeed('NewPost')} user={me} />}

      {posts.length > 0 ? (
        <div className={cnPageFeed('Wall')}>
          {posts.map(({ id, text, ...post }) => (
            <WallPost key={id} id={id} {...post}>
              {text}
            </WallPost>
          ))}
        </div>
      ) : (
        <div className={cnPageFeed('Placeholder', { admin: me.isAdmin })}>
          Пока что здесь ничего нет, заходите позже.
        </div>
      )}
    </div>
  )
}
