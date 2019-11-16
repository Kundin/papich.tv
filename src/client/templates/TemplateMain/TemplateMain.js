import React from 'react'
import { cn } from '@bem-react/classname'
import { Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

import { WrapperMain } from '../../components'

import './TemplateMain.css'

const PageIndex = loadable(() => import('../../pages/PageIndex/default'))

const cnTemplateMain = cn('TemplateMain')

export function TemplateMain() {
  return (
    <div className={cnTemplateMain()}>
      <header className={cnTemplateMain('Header')}>
        <WrapperMain>
          <div className={cnTemplateMain('HeaderContent')}>
            <h1 className={cnTemplateMain('Logotype')}>Papich.tv</h1>
          </div>
        </WrapperMain>
      </header>

      <div className={cnTemplateMain('Content')}>
        <WrapperMain>
          <Switch>
            <Route path="/" exact component={PageIndex} />
          </Switch>
        </WrapperMain>
      </div>

      <footer className={cnTemplateMain('Footer')}>
        <WrapperMain>
          <div className={cnTemplateMain('FooterContent')}>
            <div className={cnTemplateMain('Copyright')}>© papich.tv, 2019</div>
            <a
              className={cnTemplateMain('Developer')}
              href="//vk.com/ykundin"
              target="_blank"
              rel="noopener"
            >
              Yury Kundin
            </a>
          </div>
        </WrapperMain>
      </footer>
    </div>
  )
}
