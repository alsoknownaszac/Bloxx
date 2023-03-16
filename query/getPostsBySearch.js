import { gql } from "@apollo/client";

export const GET_POSTS_BY_SEARCH = gql`
  query GetPostsBySearch($where: PostWhereInput) {
    posts(where: $where) {
      author {
        bio
        name
        photo {
          url
          fileName
        }
      }
      publishedAt
      categories {
        name
      }
      comments {
        comment
        createdAt
        email
        name
      }
      excerpt
      featuredImage {
        url
      }
      id
      title
      slug
      isFeaturedPost
    }
  }
`;
