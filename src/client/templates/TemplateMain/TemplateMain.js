import React, { useState } from 'react'
import { cn } from '@bem-react/classname'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { WrapperMain } from '../../components'
import { Link, ButtonAction } from '../../UI'
import { IconFireSolid, IconUsersSolid, IconUserCircleSolid } from '../../icons'
import { useMe } from '../../graphql'
import { texts } from './texts'
import './TemplateMain.css'

const cnTemplateMain = cn('TemplateMain')

TemplateMain.propTypes = {
  children: PropTypes.node,
}

export function TemplateMain({ children, ...props }) {
  const {
    data: { me },
  } = useMe()
  const tabs = ['/', '/feed', `/id${me && me.vkId}`]
  const { pathname } = useLocation()
  const [activeTab, setActiveTab] = useState(tabs.includes(pathname) ? pathname : null)

  return (
    <div {...props} className={cnTemplateMain()}>
      <header className={cnTemplateMain('Header')}>
        <WrapperMain>
          <div className={cnTemplateMain('HeaderContent')}>
            <h1 className={cnTemplateMain('Logotype')}>{texts.title}</h1>
            <Link external target="_blank" to="//donationalerts.com/r/evilarthas">
              <ButtonAction className={cnTemplateMain('Donate')}>{texts.btnDonate}</ButtonAction>
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
TemplateMainTab.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  url: PropTypes.string,
  icon: PropTypes.element.isRequired,
  count: PropTypes.number,
}

TemplateMainTab.defaultTypes = {
  count: 0,
}

export function TemplateMainTab({ className, active, url, icon, count, ...props }) {
  return (
    <Link {...props} className={cnTemplateMain('Tab', { active }, [className])} to={url}>
      <div className={cnTemplateMain('TabIcon')}>
        {icon}
        {!!count && <div className={cnTemplateMain('TabCounter')}>{count}</div>}
      </div>
    </Link>
  )
}
