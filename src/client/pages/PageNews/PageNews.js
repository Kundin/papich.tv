import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import { WallPost, NewPost } from '../../components'
import posts from '../posts'
import users from '../users'
import './PageNews.css'

const cnPageNews = cn('PageNews')

export function PageNews() {
  const filteredPosts = posts.filter((post) => post.isPapich)

  return (
    <Fragment>
      <Helmet>
        <title>Papich.tv</title>
      </Helmet>
      <div className={cnPageNews()}>
        <NewPost className={cnPageNews('NewPost')} user={users[0]} />

        <div className={cnPageNews('Wall')}>
          {filteredPosts.map(({ id, text, ...post }) => (
            <WallPost key={id} id={id} {...post}>
              {text}
            </WallPost>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
