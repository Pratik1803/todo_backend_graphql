const { buildSchema } = require("graphql");

const typeDefs = buildSchema(`
    type Query{
        message: String!
    }
`);

module.exports = { typeDefs };
