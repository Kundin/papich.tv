import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useMe } from '../../graphql/hooks'

export function RouteAuth({ children, ...props }) {
  const {
    data: { me },
  } = useMe()

  return me ? <Route {...props}>{children}</Route> : <Redirect to="/login" />
}
