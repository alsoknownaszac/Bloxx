import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const graphCmsToken = process.env.GRAPHCMS_TOKEN;

export const cmsClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${graphCmsToken}`,
  },
});

export const hygraph = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/ckwnln5yd1fbo01zabgxpefr0/master",
  {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qYzFORUUzTUVaQk9EZzBNVGsyT1RVME1VTTRSa1ZEUkRRNFFVRkJOVVpHUmtaRk0wWkNRZyJ9.eyJodHRwczovL2dyYXBoY21zLmNvbS9sb2dpbnNDb3VudCI6MTUsImh0dHBzOi8vZ3JhcGhjbXMuY29tL2ZsYWdzIjp7fSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdyYXBoY21zLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwMTc2ODM2OTI0NjE5MDkxMDc3NCIsImF1ZCI6IjhWV1NkeVVodFpUNDNuQWlwcjJmaktSaGpKbXA4c1l5IiwiaWF0IjoxNjcyODMyNjM2LCJleHAiOjE2NzM0Mzc0MzYsInNpZCI6IjFITmR0NkxGZ3RYVWk1TDIta1kzS2s5bXpFZ0NldjB3Iiwibm9uY2UiOiIyU3ZZNGFqRlA0Ul9raGp2N0JrR2xIc09rZnY5ZDktWiJ9.U0TrvA-h10sZ530gfC0hGKOhR_4CUmOmL19GvWl8vHQk6Y0CPFn4J3Nv1JQY-qEHA8_kmS1Ig4S5kHPfo8WaoS5UWRTUDOkcUHShzE4r_qS92jJHajdwxPvGpA_29poxNBJTUxrFlz2K7g4dal1yav6lP9mozfk-ScScyxCsIELX5ZzTe2hlPPcP0Ijabf_gvsa-H8jKLkIPcIa-i9g-9ccyeCO055CqhGBAn88PAsOz-i1VpKO_dXVrYyugzn-sJIo5oR8yXmexy_yqmN1Y7TzAs4MNZ9YYXr-gUipNHn5pFh90re-7iff6wq4dz6jsw16TNWylExhvE_jliFLCaw",
    },
  }
);
