// Перевести дату и время в строку

const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

export function dateToString(_date) {
  const now = new Date()
  const date = new Date(_date)
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const year_string = year === now.getFullYear() ? ' ' : ` ${year} `
  const hours_string = hours > 9 ? hours : `0${hours}`
  const minutes_string = minutes > 9 ? minutes : `0${minutes}`

  return `${day} ${months[month]}${year_string}в ${hours_string}:${minutes_string}`
}
