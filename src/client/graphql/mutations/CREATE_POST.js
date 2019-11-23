import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation createPost($title: String, $text: String, $attachments: [ID]) {
    createPost(title: $title, text: $text, attachments: $attachments) {
      id
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
      title
      text
      attachments {
        id
        type
        body {
          ... on PhotoAttachment {
            id
            src
          }
          ... on YouTubeAttachment {
            id
            url
          }
        }
      }
      counters {
        likes
        comments
      }
      hasLike
      isPapich
      createdAt
    }
  }
`
