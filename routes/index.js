const express = require('express');
const router = express.Router();

//importar el controlador 
const homeControllers = require('../controllers/homeControllers');
const userControllers = require('../controllers/userControllers');

module.exports = function() {
    //rutas para el home
    router.get('/', homeControllers.homeControllers);
    router.post('/user', userControllers.nuevoUser );

    return router;
}