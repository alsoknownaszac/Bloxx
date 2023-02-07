import { gql } from "@apollo/client";

// export const GET_POSTS = gql`
//   query Posts {
//     postsConnection {
//       edges {
//         node {
//           author {
//             bio
//             id
//             name
//             photo {
//               url
//             }
//           }
//           createdAt
//           slug
//           title
//           excerpt
//           featuredImage {
//             url
//           }
//           isFeaturedPost
//           id
//           categories {
//             name
//             slug
//           }
//         }
//       }
//     }
//   }
// `;

export const GET_POSTS = gql`
  query Posts {
    posts {
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
