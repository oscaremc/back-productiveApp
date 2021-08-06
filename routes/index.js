const express = require('express');
const router = express.Router();

//importar el controlador 
const homeControllers = require('../controllers/homeControllers');
const userControllers = require('../controllers/userControllers');
const objectiveControllers = require('../controllers/objectiveControllers');
const ciclosControllers = require('../controllers/ciclosControllers');
const listaControllers = require('../controllers/listaControllers');
const retoEjerciciosControllers = require('../controllers/retoEjerciciosControllers');
const retoJuegoControllers = require('../controllers/retoJuegoControllers');
const retoSaberControllers = require('../controllers/retoSaberControllers');

module.exports = function() {
    //rutas para el home
    router.get('/', homeControllers.homeControllers);
    router.post('/user', userControllers.nuevoUser );
    router.post('/objetive', objectiveControllers.nuevoObjetive );
    router.post('/ciclos', ciclosControllers.nuevoCiclo );
    router.post('/lista', listaControllers.nuevoLista );
    router.post('/retoejercicios', retoEjerciciosControllers.nuevoRetoEjercicios );
    router.post('/retojuego', retoJuegoControllers.nuevoRetoJuego );
    router.post('/retosaber', retoSaberControllers.nuevoRetoSaber );

    return router;
}