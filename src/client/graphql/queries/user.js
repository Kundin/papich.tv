import gql from 'graphql-tag'

export const USER = gql`
  query($vkId: Int!) {
    user(vkId: $vkId) {
      vkId
      firstName
      lastName
      fullName
      sex
      avatar
      email
      lvl
      isMan
      isWoman
      isDefault
      isAdmin
      isPapich
    }
  }
`
