import gql from 'graphql-tag'

export const ME = gql`
  query {
    me {
      id
      firstName
      lastName
      fullName
      sex
      avatar
      email
    }
  }
`
