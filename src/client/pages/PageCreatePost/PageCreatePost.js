import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@bem-react/classname'
import { useMutation } from '@apollo/react-hooks'
import { Redirect } from 'react-router-dom'
import loadable from '@loadable/component'

import { Pad, PreloaderPage, ErrorPage, AttachPhoto } from '../../components'
import { Textarea, ButtonAction } from '../../UI'
import { IconCameraSolid, IconVideoSolid } from '../../icons'
import { POSTS, CREATE_POST, UPLOAD_FILE, useMe } from '../../graphql'
import './PageCreatePost.css'

const ModalAddYouTubeVideo = loadable(() => import('../../modals/ModalAddYouTubeVideo/default'))

const cnPageCreatePost = cn('PageCreatePost')

export function PageCreatePost() {
  const refTitle = useRef()
  const refText = useRef()
  const [attachments, setAttachments] = useState([])
  const [visibleModalAddYouTubeVideo, setVisibleModalAddYouTubeVideo] = useState(false)
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

  useEffect(() => {
    if (!dataFile) return

    setAttachments([dataFile.uploadFile])
  }, [dataFile])

  // Добавить пост
  function onAddPost() {
    const title = refTitle.current.value
    const text = refText.current.value

    createPost({
      variables: { title, text, attachments: attachments.map((attachment) => attachment.id) },
    })
  }

  // Загрузка файла
  function onUpload(e) {
    const {
      validity,
      files: [file],
    } = e.target

    uploadFile({ variables: { file } })
  }

  // Удаление вложения
  function onRemoveAttach(e, id) {
    const newAttachments = attachments.filter((attach) => attach.id !== id)

    setAttachments(newAttachments)
  }

  return loading ? (
    <PreloaderPage />
  ) : data ? (
    <Redirect to={`/post-${data.createPost.id}`} />
  ) : me.isDefault ? (
    <ErrorPage text="Создавать новые записи могут только администраторы и Папич." />
  ) : (
    <div className={cnPageCreatePost()}>
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
          {attachments.map((attach) => (
            <AttachPhoto
              key={attach.id}
              {...attach.body}
              onRemove={(e) => onRemoveAttach(e, attach.id)}
            />
          ))}
        </div>
      )}
      {/* Подвал */}
      <div className={cnPageCreatePost('Footer')}>
        <ButtonAction onClick={onAddPost}>
          {me.isDefault ? 'Предложить' : 'Опубликовать'}
        </ButtonAction>

        <div className={cnPageCreatePost('Buttons')}>
          {/* Прикрепить видео с ютуба */}
          <div
            className={cnPageCreatePost('Attach')}
            onClick={() => setVisibleModalAddYouTubeVideo(true)}
          >
            <IconVideoSolid />
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
      {/* Модальное окно добавление видео с ютуба */}
      <ModalAddYouTubeVideo
        visible={visibleModalAddYouTubeVideo}
        onClose={() => setVisibleModalAddYouTubeVideo(false)}
      />
    </div>
  )
}
