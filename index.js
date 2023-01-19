require("dotenv").config();
require("./config/conn");
const PORT = process.env.PORT || 8001;
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("./schema/typedefs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  try {
    const { url } = await startStandaloneServer(server, {
      listen: {
        port: PORT,
      },
    });

    console.log(`Server ready at ${url}`);
  } catch (error) {
    console.log(`Err in starting server: ${error}`);
  }
};

startServer();
