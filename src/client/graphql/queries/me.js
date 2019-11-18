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
      isMan
      isWoman
      isDefault
      isAdmin
      isPapich
    }
  }
`
