import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@bem-react/classname'
import { useMutation } from '@apollo/react-hooks'
import { Redirect } from 'react-router-dom'
import loadable from '@loadable/component'
import { Helmet } from 'react-helmet'

import {
  Pad,
  PreloaderPage,
  ErrorPage,
  AttachPhoto,
  AttachYouTube,
  AttachPoll,
} from '../../components'
import { Textarea, ButtonAction } from '../../UI'
import { IconCameraSolid, IconYoutubeBrands, IconPollSolid } from '../../icons'
import {
  POSTS,
  CREATE_POST,
  UPLOAD_FILE,
  UPLOAD_YOUTUBE,
  UPLOAD_POLL,
  REMOVE_ATTACH,
  useMe,
} from '../../graphql'
import './PageCreatePost.css'

const ModalAddYouTubeVideo = loadable(() => import('../../modals/ModalAddYouTubeVideo/default'))
const ModalAddPoll = loadable(() => import('../../modals/ModalAddPoll/default'))

const cnPageCreatePost = cn('PageCreatePost')

export function PageCreatePost() {
  const refTitle = useRef()
  const refText = useRef()
  const [attachments, setAttachments] = useState([])
  const [visibleModalAddYouTubeVideo, setVisibleModalAddYouTubeVideo] = useState(false)
  const [visibleModalAddPoll, setVisibleModalAddPoll] = useState(false)
  const {
    data: { me },
    loading,
  } = useMe()
  const [createPost, { data }] = useMutation(CREATE_POST, {
    update(cache, { data: { createPost } }) {
      const variables = { isPapich: me.isPapich }
      let { posts } = cache.readQuery({ query: POSTS, variables })

      // Добавляем пост в самое начало списка
      posts.unshift(createPost)

      cache.writeQuery({
        query: POSTS,
        variables,
        data: {
          posts,
        },
      })
    },
  })
  const [uploadFile, { data: dataFile }] = useMutation(UPLOAD_FILE)
  const [uploadYouTube, { data: dataYouTube }] = useMutation(UPLOAD_YOUTUBE)
  const [uploadPoll, { data: dataPoll }] = useMutation(UPLOAD_POLL)
  const [removeAttach, { data: dataRemoveAttach }] = useMutation(REMOVE_ATTACH)

  // Добавляем фотовложения
  useEffect(() => {
    dataFile && setAttachments([dataFile.uploadFile])
  }, [dataFile])

  // Добавляем вложение видео с ютуба
  useEffect(() => {
    dataYouTube && setAttachments([dataYouTube.uploadYouTube])
  }, [dataYouTube])

  // Добавляем вложение — опрос
  useEffect(() => {
    dataPoll && setAttachments([dataPoll.uploadPoll])
  }, [dataPoll])

  // Удаляем вложение
  useEffect(() => {
    if (!dataRemoveAttach) return

    setAttachments(() => {
      return attachments.filter((attach) => attach.id !== dataRemoveAttach.removeAttach.id)
    })
  }, [dataRemoveAttach])

  // Добавить пост
  function onAddPost() {
    const title = refTitle.current.value
    const text = refText.current.value

    createPost({
      variables: { title, text, attachmentIds: attachments.map((attachment) => attachment.id) },
    })
  }

  // Загрузка файла
  function onUpload(e) {
    const {
      files: [file],
    } = e.target

    uploadFile({ variables: { file } })
  }

  // Удаление вложения
  function onRemoveAttach(e, id) {
    removeAttach({ variables: { id } })
  }

  return loading ? (
    <PreloaderPage />
  ) : data ? (
    <Redirect to={`/post-${data.createPost.id}`} />
  ) : me.isDefault ? (
    <ErrorPage text="Создавать новые записи могут только администраторы и Папич." />
  ) : (
    <div className={cnPageCreatePost()}>
      <Helmet>
        <title>Новая запись</title>
      </Helmet>

      <Pad title="Новая запись">
        <Textarea
          ref={refTitle}
          className={cnPageCreatePost('Title')}
          name="title"
          placeholder="Заголовок (необязательно)"
        />
        <Textarea
          ref={refText}
          className={cnPageCreatePost('Text')}
          name="text"
          placeholder="Введите текст…"
        />
      </Pad>

      {/* Вложения */}
      {attachments.length > 0 && (
        <div className={cnPageCreatePost('Attaches')}>
          {attachments.map(({ id, type, body }) => {
            switch (type) {
              case 'photo':
                return <AttachPhoto key={id} {...body} onRemove={(e) => onRemoveAttach(e, id)} />

              case 'youtube':
                return <AttachYouTube key={id} {...body} onRemove={(e) => onRemoveAttach(e, id)} />

              case 'poll':
                return <AttachPoll key={id} {...body} onRemove={(e) => onRemoveAttach(e, id)} />

              default:
                return null
            }
          })}
        </div>
      )}

      {/* Подвал */}
      <div className={cnPageCreatePost('Footer')}>
        <ButtonAction onClick={onAddPost}>Опубликовать</ButtonAction>

        <div className={cnPageCreatePost('Buttons')}>
          {/* Прикрепить опрос */}
          <div className={cnPageCreatePost('Attach')} onClick={() => setVisibleModalAddPoll(true)}>
            <IconPollSolid />
          </div>

          {/* Прикрепить видео с ютуба */}
          <div
            className={cnPageCreatePost('Attach')}
            onClick={() => setVisibleModalAddYouTubeVideo(true)}
          >
            <IconYoutubeBrands />
          </div>

          {/* Прикрепить изображение */}
          <div className={cnPageCreatePost('Attach')}>
            <IconCameraSolid />
            <input
              type="file"
              accept="image/*"
              className={cnPageCreatePost('AttachInput')}
              onChange={onUpload}
            />
          </div>
        </div>
      </div>

      {/* Модальное окно добавления опроса */}
      <ModalAddPoll
        visible={visibleModalAddPoll}
        onClose={() => setVisibleModalAddPoll(false)}
        onAttach={(e, variables) => {
          uploadPoll({ variables })

          setVisibleModalAddPoll(false)
        }}
      />

      {/* Модальное окно добавление видео с ютуба */}
      <ModalAddYouTubeVideo
        visible={visibleModalAddYouTubeVideo}
        onClose={() => setVisibleModalAddYouTubeVideo(false)}
        onAttach={(e, variables) => {
          uploadYouTube({ variables })

          setVisibleModalAddYouTubeVideo(false)
        }}
      />
    </div>
  )
}
