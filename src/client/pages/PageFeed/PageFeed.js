import React, { Fragment } from 'react'
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
    <Fragment>
      <Helmet>
        <title>Papich.tv</title>
      </Helmet>
      <div className={cnPageFeed()}>
        {me.isAdmin && <NewPost className={cnPageFeed('NewPost')} user={me} />}

        <div className={cnPageFeed('Wall')}>
          {posts.map(({ id, text, ...post }) => (
            <WallPost key={id} id={id} {...post}>
              {text}
            </WallPost>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
