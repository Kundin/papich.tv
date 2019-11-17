import React from 'react'
import { cn } from '@bem-react/classname'
import loadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'

import '../../themes/default'
import './App.css'

const TemplateMain = loadable(() => import('../../templates/TemplateMain/default'))
const PageLogin = loadable(() => import('../../pages/PageLogin/default'))

const cnApp = cn('App')

export function App() {
  return (
    <div className={cnApp()}>
      <Switch>
        <Route exact path="/login" component={PageLogin} />
        <TemplateMain />
      </Switch>
    </div>
  )
}
