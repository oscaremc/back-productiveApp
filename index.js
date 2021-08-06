const express = require('express');
const routes = require('./routes');
// const path = require('path');

require('./database');


// crear una app de express
const app = express();

//añadir la carpeta de las vistar
// app.set('views', path.join(__dirname, './views'))

// habilitar body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', routes() );

app.listen(3000);