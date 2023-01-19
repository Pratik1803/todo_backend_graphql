const express = require("express");
const PORT = process.env.PORT || 8001;
const { graphqlHTTP } = require("express-graphql");
const { typeDefs } = require("./schema/typedefs");
const { resolvers } = require("./schema/resolvers");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: typeDefs,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "hit /graphql for graphiql interface",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
