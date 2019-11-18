import { useQuery } from '@apollo/react-hooks'

import { ME } from '../queries'

export function useMe() {
  return useQuery(ME)
}
