import React from 'react'
import { cn } from '@bem-react/classname'
import { Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

import './App.css'

const PageIndex = loadable(() => import('../../pages/PageIndex/default'))

const cnApp = cn('App')

export function App() {
  return (
    <div className={cnApp()}>
      <Switch>
        <Route path="/" exact component={PageIndex} />
      </Switch>
    </div>
  )
}
