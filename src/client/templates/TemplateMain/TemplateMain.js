import React, { useState } from 'react'
import { cn } from '@bem-react/classname'
import { Route, Switch, useLocation } from 'react-router-dom'
import loadable from '@loadable/component'

import { WrapperMain, RouteAuth } from '../../components'
import { Link } from '../../UI'
import { IconFireSolid, IconUsersSolid, IconBarsSolid } from '../../icons'
import { useMe } from '../../graphql/hooks'
import { texts } from './texts'
import './TemplateMain.css'

const PageNews = loadable(() => import('../../pages/PageNews/default'))
const PageFeed = loadable(() => import('../../pages/PageFeed/default'))
const PageMenu = loadable(() => import('../../pages/PageMenu/default'))
const PageDonate = loadable(() => import('../../pages/PageDonate/default'))
const PagePost = loadable(() => import('../../pages/PagePost/default'))
const PageCreatePost = loadable(() => import('../../pages/PageCreatePost/default'))
const PageUser = loadable(() => import('../../pages/PageUser/default'))
const PageNotFound = loadable(() => import('../../pages/PageNotFound/default'))

const cnTemplateMain = cn('TemplateMain')

export function TemplateMain() {
  const {
    data: { me },
  } = useMe()
  const tabs = ['/', '/feed', '/menu']
  const { pathname } = useLocation()
  const [activeTab, setActiveTab] = useState(tabs.includes(pathname) ? pathname : null)

  return (
    <div className={cnTemplateMain()}>
      <header className={cnTemplateMain('Header')}>
        <WrapperMain>
          <div className={cnTemplateMain('HeaderContent')}>
            <h1 className={cnTemplateMain('Logotype')}>{texts.title}</h1>
            <Link to="/donate" className={cnTemplateMain('Donate')}>
              {texts.btnDonate}
            </Link>
          </div>
        </WrapperMain>
      </header>

      <div className={cnTemplateMain('Content')}>
        <Switch>
          <RouteAuth exact path="/" component={PageNews} />
          <RouteAuth exact path="/feed" component={PageFeed} />
          <RouteAuth exact path="/menu" component={PageMenu} />
          <RouteAuth exact path="/create-post" component={PageCreatePost} />
          <Route exact path="/post-:postId" component={PagePost} />
          <Route exact path="/id:userId" component={PageUser} />
          <Route exact path="/donate" component={PageDonate} />
          <Route component={PageNotFound} />
        </Switch>
      </div>

      {me && (
        <div className={cnTemplateMain('Tabs')}>
          <TemplateMainTab
            active={activeTab === '/'}
            url="/"
            icon={<IconFireSolid />}
            onClick={() => setActiveTab('/')}
          />
          <TemplateMainTab
            active={activeTab === '/feed'}
            url="/feed"
            icon={<IconUsersSolid />}
            onClick={() => setActiveTab('/feed')}
          />
          <TemplateMainTab
            active={activeTab === '/menu'}
            url="/menu"
            icon={<IconBarsSolid />}
            onClick={() => setActiveTab('/menu')}
          />
        </div>
      )}
    </div>
  )
}

// Отдельная вкладка
export function TemplateMainTab({ className, active, url, icon, count = 0, ...props }) {
  return (
    <Link {...props} className={cnTemplateMain('Tab', { active }, [className])} to={url}>
      <div className={cnTemplateMain('TabIcon')}>
        {icon}
        {!!count && <div className={cnTemplateMain('TabCounter')}>{count}</div>}
      </div>
    </Link>
  )
}
