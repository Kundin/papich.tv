import React from 'react'
import { cn } from '@bem-react/classname'
import { Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

import { WrapperMain } from '../../components'
import { IconFireSolid, IconUsersSolid, IconBarsSolid } from '../../icons'
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
        <WrapperMain className={cnTemplateMain('ContentWrapper')}>
          <Switch>
            <Route path="/" exact component={PageIndex} />
          </Switch>
        </WrapperMain>
      </div>

      <div className={cnTemplateMain('Tabs')}>
        <TemplateMainTab icon={<IconFireSolid />} />
        <TemplateMainTab icon={<IconUsersSolid />} />
        <TemplateMainTab icon={<IconBarsSolid />} />
      </div>
    </div>
  )
}

// Отдельная вкладка
export function TemplateMainTab({ className, icon, count = 0, ...props }) {
  return (
    <div {...props} className={cnTemplateMain('Tab', [className])}>
      <div className={cnTemplateMain('TabIcon')}>
        {icon}
        {!!count && <div className={cnTemplateMain('TabCounter')}>{count}</div>}
      </div>
    </div>
  )
}
