import gql from 'graphql-tag'

export const POSTS = gql`
  query posts($type: String) {
    posts(type: $type) {
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
