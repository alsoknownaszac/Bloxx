import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { Layout } from "../components";
import "../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import { client } from "../api/client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
