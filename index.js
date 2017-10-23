var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    name: String,
    username: String,
    email: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  name: () => ('Laurence Steven'),
  username: () => ('LaurenceM10'),
  email: () => ('nombre@correo')
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Corriendo un GraphQL API server');
