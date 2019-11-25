import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useMe } from '../../graphql'

RouteAuth.propTypes = {
  children: PropTypes.node.isRequired,
}

export function RouteAuth({ children, ...props }) {
  const {
    data: { me },
  } = useMe()

  return me ? <Route {...props}>{children}</Route> : <Redirect to="/login" />
}
