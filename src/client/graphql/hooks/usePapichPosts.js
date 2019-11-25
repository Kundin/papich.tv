// Получить только посты от Папича

import { usePosts } from '../hooks'

export function usePapichPosts(variables = {}) {
  return usePosts(Object.assign(variables, { isPapich: true }))
}
