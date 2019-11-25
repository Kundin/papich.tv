import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

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
  return (
    <div className={cnComment({}, [className])}>
      <Link to={`id${author.vkId}`}>
        <Avatar user={author} className={cnComment('Avatar')} />
      </Link>
      <div className={cnComment('Content')}>
        <Link to={`id${author.vkId}`}>
          <div className={cnComment('Name')}>{author.fullName}</div>
        </Link>
        <div className={cnComment('Text')}>{text}</div>
        <div className={cnComment('Date')}>{dateToString(createdAt)}</div>
      </div>
    </div>
  )
}
