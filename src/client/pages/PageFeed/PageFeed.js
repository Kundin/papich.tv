import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import { WallPost } from '../../components'
import posts from '../posts'
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
