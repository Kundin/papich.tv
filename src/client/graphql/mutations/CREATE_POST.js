import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation createPost($title: String, $text: String, $attachmentIds: [ID]) {
    createPost(title: $title, text: $text, attachmentIds: $attachmentIds) {
      id
      author {
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
          ... on PollAttachment {
            id
            options {
              name
              votes {
                id
              }
            }
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
