import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './Avatar.css'

const cnAvatar = cn('Avatar')

Avatar.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
  size: PropTypes.string,
}

Avatar.defaultProps = {
  size: 'm',
}

export function Avatar({ className, user, size, ...props }) {
  return (
    <img
      {...props}
      className={cnAvatar({ size, lvl: user.lvl }, [className])}
      src={user.avatar}
      alt=""
    />
  )
}
