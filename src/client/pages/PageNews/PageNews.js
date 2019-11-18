import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import { WallPost, NewPost } from '../../components'
import { usePosts, useMe } from '../../graphql/hooks'
import './PageNews.css'

const cnPageNews = cn('PageNews')

export function PageNews() {
  const {
    data: { me },
  } = useMe()
  const {
    data: { posts = [] },
    loading,
  } = usePosts({ type: 'papich' })

  return (
    <Fragment>
      <Helmet>
        <title>Papich.tv</title>
      </Helmet>
      <div className={cnPageNews()}>
        <NewPost className={cnPageNews('NewPost')} user={me} />

        <div className={cnPageNews('Wall')}>
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
