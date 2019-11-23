import gql from 'graphql-tag'

export const UPLOAD_YOUTUBE = gql`
  mutation uploadYouTube($url: String!) {
    uploadYouTube(url: $url) {
      id
      type
      body {
        ... on YouTubeAttachment {
          id
          url
        }
      }
    }
  }
`
