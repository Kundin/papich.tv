import React, { Fragment, useState } from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'
import TextTruncate from 'react-text-truncate'

import { Avatar } from '../../components'
import { Link } from '../../UI'
import { dateToString } from '../../utils'
import './Comment.css'

const cnComment = cn('Comment')

Comment.propTypes = {
  className: PropTypes.string,
  author: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export function Comment({ className, author, text, createdAt }) {
  const [truncate, setTruncate] = useState(true)

  return (
    <div className={cnComment({}, [className])}>
      <Link to={`id${author.vkId}`}>
        <Avatar user={author} className={cnComment('Avatar')} />
      </Link>
      <div className={cnComment('Content')}>
        <Link to={`id${author.vkId}`}>
          <div className={cnComment('Name')}>{author.fullName}</div>
        </Link>
        <div className={cnComment('Text', { truncate })}>
          {truncate ? (
            <TextTruncate
              line={3}
              text={text}
              textTruncateChild={
                <span className={cnComment('Show')} onClick={() => setTruncate(false)}>
                  Развернуть
                </span>
              }
            />
          ) : (
            <Fragment>
              {text}
              <div className={cnComment('Show')} onClick={() => setTruncate(true)}>
                Свернуть текст
              </div>
            </Fragment>
          )}
        </div>
        <div className={cnComment('Date')}>{dateToString(createdAt)}</div>
      </div>
    </div>
  )
}
