const express = require('express');
const bodyParser = require('body-parser');
const graphqlExpres = require('apollo-server-express');

//Declaración del puerto
const PORT = 3000;
//Instanciamos express para poder usarlo
var app = express();


app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.listen(PORT);
