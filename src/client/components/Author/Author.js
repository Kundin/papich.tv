import React, { cloneElement } from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import { Avatar } from '../../components'
import { Link } from '../../UI'
import './Author.css'

const cnAuthor = cn('Author')

// Автор поста
Author.propTypes = {
  vkId: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  info: PropTypes.node,
}

export function Author(user) {
  const { vkId, fullName, info } = user

  return (
    <div className={cnAuthor()}>
      <Link to={`/id${vkId}`} className={cnAuthor('Avatar')}>
        <Avatar user={user} alt={fullName} />
      </Link>
      <div className={cnAuthor('Content')}>
        <Link to={`/id${vkId}`}>
          <div className={cnAuthor('Name')}>{fullName}</div>
        </Link>

        {cloneElement(info, { className: cnAuthor('Info') })}
      </div>
    </div>
  )
}
