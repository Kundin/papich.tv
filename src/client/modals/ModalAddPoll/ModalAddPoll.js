import React, { useState } from 'react'
import { cn } from '@bem-react/classname'
import shortid from 'shortid'
import PropTypes from 'prop-types'

import { Modal } from '../../components'
import { Input, ButtonAction } from '../../UI'
import { IconTimesSolid } from '../../icons'
import './ModalAddPoll.css'

const cnModalAddPoll = cn('ModalAddPoll')

ModalAddPoll.propTypes = {
  className: PropTypes.string,
  onAttach: PropTypes.func.isRequired,
}

export function ModalAddPoll({ className, onAttach, ...props }) {
  const minCountOptions = 2
  const maxCountOptions = 5
  const [options, setOptions] = useState([shortid(), shortid()])
  const [values, setValues] = useState({})

  // Удалить вариант
  function removeOption(id) {
    if (options.length <= minCountOptions) return

    let newOptions = options.filter((option) => option !== id)
    let newValues = Object.assign({}, values)

    delete newValues[id]

    setOptions(newOptions)
    setValues(newValues)
  }

  // Добавить вариант
  function addOption() {
    if (options.length >= maxCountOptions) return

    const newOptions = options.concat(shortid())

    setOptions(newOptions)
  }

  // Нажатие на кнопку "Прикрепить"
  function handleAttach(e) {
    onAttach && onAttach(e, { options: Object.keys(values).map((key) => values[key]) })
  }

  return (
    <Modal {...props} title="Добавить опрос" className={cnModalAddPoll({}, [className])}>
      <div className={cnModalAddPoll('Content')}>
        <div className={cnModalAddPoll('Section')}>
          <div className={cnModalAddPoll('Label')}>Варианты ответа</div>
          <div className={cnModalAddPoll('Options')}>
            {options.map((option) => (
              <div key={option} className={cnModalAddPoll('Option')}>
                <Input
                  wide
                  name="options"
                  className={cnModalAddPoll('Input')}
                  onChange={(e) => {
                    let value = e.currentTarget.value
                    let newValues = Object.assign({}, values)

                    newValues[option] = value

                    setValues(newValues)
                  }}
                />
                {options.length > 2 && (
                  <div
                    className={cnModalAddPoll('RemoveOption')}
                    onClick={() => removeOption(option)}
                  >
                    <IconTimesSolid />
                  </div>
                )}
              </div>
            ))}

            {options.length < maxCountOptions && (
              <div
                className={cnModalAddPoll('AddOption', { visible: true })}
                onClick={() => addOption()}
              >
                Добавить вариант
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={cnModalAddPoll('Footer')}>
        <ButtonAction onClick={handleAttach}>Прикрепить</ButtonAction>
      </div>
    </Modal>
  )
}
