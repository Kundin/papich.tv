import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import { WallPost, NewPost } from '../../components'
import posts from '../posts'
import users from '../users'
import './PageFeed.css'

const cnPageFeed = cn('PageFeed')

export function PageFeed() {
  const filteredPosts = posts.filter((post) => !post.isPapich)

  return (
    <Fragment>
      <Helmet>
        <title>Papich.tv</title>
      </Helmet>
      <div className={cnPageFeed()}>
        <NewPost className={cnPageFeed('NewPost')} user={users[1]} />

        <div className={cnPageFeed('Wall')}>
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
