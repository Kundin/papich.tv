import React from 'react'
import { cn } from '@bem-react/classname'
import loadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'

import { RouteAuth } from '../../components'
import '../../themes/default'
import './App.css'

const TemplateMain = loadable(() => import('../../templates/TemplateMain/default'))

const PageNews = loadable(() => import('../../pages/PageNews/default'))
const PageFeed = loadable(() => import('../../pages/PageFeed/default'))
const PageMenu = loadable(() => import('../../pages/PageMenu/default'))
const PageDonate = loadable(() => import('../../pages/PageDonate/default'))
const PagePost = loadable(() => import('../../pages/PagePost/default'))
const PageCreatePost = loadable(() => import('../../pages/PageCreatePost/default'))
const PageUser = loadable(() => import('../../pages/PageUser/default'))
const PageLogin = loadable(() => import('../../pages/PageLogin/default'))
const PageNotFound = loadable(() => import('../../pages/PageNotFound/default'))

const cnApp = cn('App')

// Страницы, требующие авторизации
function AuthPages() {
  return (
    <Switch>
      <RouteAuth exact path="/">
        <TemplateMain>
          <PageNews />
        </TemplateMain>
      </RouteAuth>

      <RouteAuth exact path="/feed">
        <TemplateMain>
          <PageFeed />
        </TemplateMain>
      </RouteAuth>

      <RouteAuth exact path="/create-post">
        <TemplateMain>
          <PageCreatePost />
        </TemplateMain>
      </RouteAuth>

      {/*
        <RouteAuth exact path="/menu">
          <TemplateMain>
            <PageMenu />
          </TemplateMain>
        </RouteAuth>
      */}
    </Switch>
  )
}

// Публичные страницы, доступные без авторизации
function PublicPages() {
  return (
    <Switch>
      <Route exact path="/login">
        <PageLogin />
      </Route>

      <Route exact path="/post-:postId">
        <TemplateMain>
          <PagePost />
        </TemplateMain>
      </Route>

      <Route exact path="/id:vkId">
        <TemplateMain>
          <PageUser />
        </TemplateMain>
      </Route>

      {/*
        <Route exact path="/donate">
          <TemplateMain>
            <PageDonate />
          </TemplateMain>
        </Route>
      */}

      <Route>
        <TemplateMain>
          <PageNotFound />
        </TemplateMain>
      </Route>
    </Switch>
  )
}

export function App() {
  return (
    <div className={cnApp()}>
      <AuthPages />
      <PublicPages />
    </div>
  )
}
