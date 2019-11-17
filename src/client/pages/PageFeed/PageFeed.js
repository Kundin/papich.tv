import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import { WallPost } from '../../components'
import news from './news'
import './PageFeed.css'

const cnPageFeed = cn('PageFeed')

export function PageFeed() {
  return (
    <Fragment>
      <Helmet>
        <title>Papich.tv</title>
      </Helmet>
      <div className={cnPageFeed()}>
        <div className={cnPageFeed('Wall')}>
          {news.map(({ id, text, ...post }) => (
            <WallPost key={id} {...post}>
              {text}
            </WallPost>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
