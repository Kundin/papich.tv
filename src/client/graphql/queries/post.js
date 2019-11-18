import gql from 'graphql-tag'

export const POST = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      type
      author {
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
      text
      counters {
        likes
        comments
      }
      createdAt
    }
  }
`
