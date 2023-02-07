import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/ckwnln5yd1fbo01zabgxpefr0/master",
  cache: new InMemoryCache(),
});
