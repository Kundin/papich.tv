import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import { WallPost, NewPost, PreloaderPage } from '../../components'
import { usePapichPosts, useMe } from '../../graphql/hooks'
import './PageNews.css'

const cnPageNews = cn('PageNews')

export function PageNews() {
  const {
    data: { me },
  } = useMe()
  const {
    data: { posts = [] },
    loading,
  } = usePapichPosts()

  return loading ? (
    <PreloaderPage />
  ) : (
    <Fragment>
      <Helmet>
        <title>Papich.tv</title>
      </Helmet>
      <div className={cnPageNews()}>
        {me.isPapich && <NewPost className={cnPageNews('NewPost')} user={me} />}

        {posts.length > 0 ? (
          <div className={cnPageNews('Wall')}>
            {posts.map(({ id, text, ...post }) => (
              <WallPost key={id} id={id} {...post}>
                {text}
              </WallPost>
            ))}
          </div>
        ) : (
          <div className={cnPageNews('Placeholder', { papich: me.isPapich })}>
            Здесь будет контент от Папича, как только он решит что-то опубликовать на своём сайте.
          </div>
        )}
      </div>
    </Fragment>
  )
}
