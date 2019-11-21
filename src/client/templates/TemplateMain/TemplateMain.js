import React, { useState } from 'react'
import { cn } from '@bem-react/classname'
import { useLocation } from 'react-router-dom'

import { WrapperMain } from '../../components'
import { Link } from '../../UI'
import { IconFireSolid, IconUsersSolid, IconBarsSolid, IconUserCircleSolid } from '../../icons'
import { useMe } from '../../graphql'
import { texts } from './texts'
import './TemplateMain.css'

const cnTemplateMain = cn('TemplateMain')

export function TemplateMain({ children }) {
  const {
    data: { me },
  } = useMe()
  const tabs = ['/', '/feed', `/id${me && me.vkId}`]
  const { pathname } = useLocation()
  const [activeTab, setActiveTab] = useState(tabs.includes(pathname) ? pathname : null)

  return (
    <div className={cnTemplateMain()}>
      <header className={cnTemplateMain('Header')}>
        <WrapperMain>
          <div className={cnTemplateMain('HeaderContent')}>
            <h1 className={cnTemplateMain('Logotype')}>{texts.title}</h1>
            <Link
              external
              target="_blank"
              to="//donationalerts.com/r/evilarthas"
              className={cnTemplateMain('Donate')}
            >
              {texts.btnDonate}
            </Link>
          </div>
        </WrapperMain>
      </header>

      <div className={cnTemplateMain('Content')}>{children}</div>

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
            active={activeTab === `/id${me.vkId}`}
            url={`/id${me.vkId}`}
            icon={<IconUserCircleSolid />}
            onClick={() => setActiveTab(`/id${me.vkId}`)}
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
