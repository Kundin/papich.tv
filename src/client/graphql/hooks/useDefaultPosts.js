// Получить только посты не от Папича

import { usePosts } from '../hooks'

export function useDefaultPosts(variables) {
  return usePosts(Object.assign(variables, { isPapich: false }))
}
