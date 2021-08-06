const express = require('express');
const routes = require('./routes');

require('./database');

// crear una app de express
const app = express();

// habilitar body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', routes() );

app.listen(3000);