import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import "./App.css";
import HomeView from "./views/HomeView";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",

  // InMemoryCache is a class that implements the Cache interface.
  // The cache is used to cache query results.
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HomeView />;
    </ApolloProvider>
  );
}

export default App;
