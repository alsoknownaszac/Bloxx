import { gql } from "@apollo/client";

export const GET_SINGLE_POST = gql`
  query Post($where: PostWhereUniqueInput!) {
    post(where: $where) {
      author {
        bio
        name
        photo {
          url
        }
      }
      categories {
        slug
        name
        id
      }
      comments {
        comment
        createdAt
        email
        name
      }
      content {
        json
      }
      excerpt
      featuredImage {
        url
        fileName
      }
      id
      isFeaturedPost
      publishedAt
      slug
      title
    }
  }
`;
