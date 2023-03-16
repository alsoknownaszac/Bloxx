import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { Layout } from "../components";
import "../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import { client } from "../api/client";
import { Provider } from "react-redux";
import { store } from "../app/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
