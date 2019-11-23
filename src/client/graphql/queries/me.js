import gql from 'graphql-tag'

export const ME = gql`
  query {
    me {
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
