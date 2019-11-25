import { useQuery } from '@apollo/react-hooks'

import { POST } from '../queries'

export function usePost(variables = {}) {
  return useQuery(POST, { variables })
}
