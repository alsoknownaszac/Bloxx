import { gql } from "@apollo/client";

// export const GET_RECENT_POSTS = gql`
//   query RecentPosts() {
//     posts(
//       orderBy: createdAt_ASC
//       last: 3
//     ) {
//       title
//       featuredImage{
//         url
//       }
//       createdAt
//       slug
//     }
//   }
// `;

export const GET_RECENT_POSTS = gql`
  query RecentPosts($orderBy: PostOrderByInput, $last: Int) {
    posts(orderBy: $orderBy, last: $last) {
      title
      featuredImage {
        url
      }
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
      createdAt
      slug
    }
  }
`;
