import React from 'react'
import { cn } from '@bem-react/classname'
import loadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'

import { RouteAuth } from '../../components'
import '../../themes/default'
import './App.css'

const TemplateMain = loadable(() => import('../../templates/TemplateMain/default'))

const PageBiography = loadable(() => import('../../pages/PageBiography/default'))
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

export function App() {
  return (
    <div className={cnApp()}>
      <Switch>
        {/* СТРАНИЦЫ ДОСТУПНЫЕ ПОСЛЕ АВТОРИЗАЦИИ */}
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

        {/* ПУБЛИЧНЫЕ СТРАНИЦЫ, ДОСТУПНЫЕ БЕЗ АВТОРИЗАЦИИ */}
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

        <Route exact path="/biography">
          <TemplateMain>
            <PageBiography />
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
    </div>
  )
}
