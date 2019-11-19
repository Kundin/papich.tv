import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation createPost($text: String) {
    createPost(text: $text) {
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
      hasLike
      createdAt
    }
  }
`
