import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import { URL } from "url";
import dbClient from "./db/client.js";
import { resolvers, typeDefs } from "./graphql/index.js";
import tokenService from "./services/tokenService.js";

const app = express();

// Serve static images for products
app.use(express.static(new URL("public", import.meta.url).pathname));

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context({ req }) {
    // Get token from headers.authorization (if there is one)
    // Authorization: Bearer <token> ⬅️ We will split this into two parts and use the second part
    // https://jwt.io/introduction
    const token = req.headers.authorization?.split(" ")[1] || "";

    // If token is not present, return empty context
    if (!token) return req;

    const verifiedToken = tokenService.verifyToken(token);

    // Mixin the verified user from the token into the request
    return { ...req, user: verifiedToken.user };
  },
});

server
  .start()
  .then(() => {
    server.applyMiddleware({ app });

    httpServer.listen({ port: 4000 }, () => {
      console.info(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      );
    });
  })
  .catch((error) => {
    console.error("Error starting server: ", error);
  });

dbClient.connect();

process.on("SIGINT", () => {
  dbClient.close();
});
