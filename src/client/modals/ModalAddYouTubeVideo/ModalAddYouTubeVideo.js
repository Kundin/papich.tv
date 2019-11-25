import React, { useState, useRef } from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import { Modal, YouTubePlayer } from '../../components'
import { Input, ButtonAction } from '../../UI'
import './ModalAddYouTubeVideo.css'

const cnModalAddYouTubeVideo = cn('ModalAddYouTubeVideo')

ModalAddYouTubeVideo.propTypes = {
  className: PropTypes.string,
  onAttach: PropTypes.func.isRequired,
}

export function ModalAddYouTubeVideo({ className, onAttach, ...props }) {
  const refUrl = useRef()
  const [url, setUrl] = useState()
  const [error, setError] = useState('')

  // Изменение текста в поле ввода
  function handleChangeUrl() {
    try {
      const _url = refUrl.current.value
      const objectUrl = new URL(_url)
      const params = objectUrl.searchParams
      const hosts = ['www.youtube.com', 'youtube.com']

      if (!hosts.includes(objectUrl.host)) {
        return setError('Можно добавлять видео только с YouTube')
      }

      if (!params.has('v') || params.get('v') === '') {
        return setError('Не указан идентификатор видео')
      }

      setError('')
      setUrl(_url)
    } catch (err) {
      setError('Некорректная ссылка на видео')
    }
  }

  // Нажатие на кнопку "Прикрепить"
  function handleAttach(e) {
    if (error.length > 0) return

    if (!url || url === '') {
      return setError('Нужно вставить ссылку на видео')
    }

    onAttach && onAttach(e, { url })
  }

  return (
    <Modal
      {...props}
      title="Добавить видео с YouTube"
      className={cnModalAddYouTubeVideo({}, [className])}
    >
      <div className={cnModalAddYouTubeVideo('Content')}>
        <Input
          ref={refUrl}
          wide
          placeholder="Адрес видео"
          error={error.length > 0}
          onChange={handleChangeUrl}
        />
        {error.length > 0 && <div className={cnModalAddYouTubeVideo('Error')}>{error}</div>}

        <div className={cnModalAddYouTubeVideo('WrapperPlayer')}>
          <YouTubePlayer url={url} />
        </div>
      </div>

      <div className={cnModalAddYouTubeVideo('Footer')}>
        <ButtonAction onClick={handleAttach}>Прикрепить</ButtonAction>
      </div>
    </Modal>
  )
}
