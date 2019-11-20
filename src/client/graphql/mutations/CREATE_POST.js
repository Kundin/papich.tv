import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation createPost($text: String, $attachments: [ID]) {
    createPost(text: $text, attachments: $attachments) {
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
      attachments {
        id
        type
        body {
          ... on PhotoAttachment {
            id
            src
          }
        }
      }
      counters {
        likes
        comments
      }
      hasLike
      createdAt
    }
  }
`
