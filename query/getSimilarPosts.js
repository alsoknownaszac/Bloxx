import { gql } from "@apollo/client";

export const GET_SIMILAR_POSTS = gql`
  query SimilarPost($slug: String!, $categories: [String!]) {
    posts(
      where: {
        slug_not: $slug
        AND: { categories_some: { slug_in: $categories } }
      }
      last: 3
    ) {
      title
      author {
        bio
        id
        name
        photo {
          url
        }
      }
      categories {
        name
        slug
      }
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
`;
