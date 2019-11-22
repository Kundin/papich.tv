import React, { useState, useRef } from 'react'
import { cn } from '@bem-react/classname'

import { Modal, YouTubePlayer } from '../../components'
import { Input, ButtonAction } from '../../UI'
import './ModalAddYouTubeVideo.css'

const cnModalAddYouTubeVideo = cn('ModalAddYouTubeVideo')

export function ModalAddYouTubeVideo({ className, ...props }) {
  const refUrl = useRef()
  const [url, setUrl] = useState()

  // Изменение текста в поле ввода
  function onChangeUrl() {
    const _url = refUrl.current.value

    setUrl(_url)
  }

  return (
    <Modal
      {...props}
      title="Добавить видео с YouTube"
      className={cnModalAddYouTubeVideo({}, [className])}
    >
      <div className={cnModalAddYouTubeVideo('Content')}>
        <Input ref={refUrl} wide placeholder="Адрес видео" onChange={onChangeUrl} />

        <div className={cnModalAddYouTubeVideo('WrapperPlayer')}>
          <YouTubePlayer url={url} />
        </div>

        <div className={cnModalAddYouTubeVideo('Footer')}>
          <ButtonAction>Прикрепить</ButtonAction>
        </div>
      </div>
    </Modal>
  )
}
