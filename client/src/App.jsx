import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import config from "./utils/config";
import HomeView from "./views/HomeView";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",

  // InMemoryCache is a class that implements the Cache interface.
  // The cache is used to cache query results.
  cache: new InMemoryCache(),
});

function App() {
  React.useEffect(() => {
    document.title = config.siteName;
  }, []);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <HomeView />;
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
