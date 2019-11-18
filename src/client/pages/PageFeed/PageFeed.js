import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import { WallPost, NewPost, PreloaderPage } from '../../components'
import { useMe, usePosts } from '../../graphql/hooks'
import './PageFeed.css'

const cnPageFeed = cn('PageFeed')

export function PageFeed() {
  const {
    data: { me },
  } = useMe()
  const {
    data: { posts = [] },
    loading,
  } = usePosts({ type: 'default' })

  return loading ? (
    <PreloaderPage />
  ) : (
    <Fragment>
      <Helmet>
        <title>Papich.tv</title>
      </Helmet>
      <div className={cnPageFeed()}>
        <NewPost className={cnPageFeed('NewPost')} user={me} />

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
