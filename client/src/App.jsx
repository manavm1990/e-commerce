import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import UserContext from "./context/UserContext";
import UserService from "./services/User";
import config from "./utils/config";
import AddUserLoginView from "./views/AddUserLoginView";
import HomeView from "./views/HomeView";

const client = new ApolloClient({
  uri:
    import.meta.env.NODE_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "https://lit-springs-06284.herokuapp.com/graphql",

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
        <Switch>
          {/* Provide a way to access and/or set the current user. */}
          <UserContext.Provider value={React.useState(UserService.getUser())}>
            <Route path={["/add-user", "/login"]}>
              <AddUserLoginView />
            </Route>
            <Route exact path="/">
              <HomeView />
            </Route>
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
