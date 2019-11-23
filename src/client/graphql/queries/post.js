import gql from 'graphql-tag'

export const POST = gql`
  query post($id: ID!) {
    post(id: $id) {
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
