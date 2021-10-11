import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import UserContext from "./context/UserContext";
import UserService from "./services/User";
import config from "./utils/config";
import CreateAccountView from "./views/CreateAccountView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

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
        <Switch>
          {/* Provide a way to access and/or set the current user. */}
          <UserContext.Provider value={React.useState(UserService.getUser())}>
            <Route path="/create-account">
              <CreateAccountView />
            </Route>
            <Route path="/login">
              <LoginView />
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
