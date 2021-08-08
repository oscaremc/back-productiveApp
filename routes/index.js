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

    router.get('/user', userControllers.mostrarUsers );
    router.post('/user', userControllers.nuevoUser );
    router.get('/user/:idUser', userControllers.mostrarUser );
    router.put('/user/:idUser', userControllers.actualizarUser );
    router.delete('/user/:idUser', userControllers.eliminarUser );

    router.get('/objetive', objectiveControllers.mostrarObjetives );
    router.post('/objetive', objectiveControllers.nuevoObjetive );
    router.get('/objetive/:idObjetive', objectiveControllers.mostrarObjetive );
    router.put('/objetive/:idObjetive', objectiveControllers.actualizarObjetive );
    router.delete('/objetive/:idObjetive', objectiveControllers.eliminarObjetive );

    router.get('/ciclos', ciclosControllers.mostrarCiclos );
    router.post('/ciclos', ciclosControllers.nuevoCiclo );
    router.get('/ciclos/:idCiclo', ciclosControllers.mostrarCiclo );
    router.put('/ciclos/:idCiclo', ciclosControllers.actualizarCiclo );
    router.delete('/ciclos/:idCiclo', ciclosControllers.eliminarCiclo );
    
    router.get('/lista', listaControllers.mostrarListas );
    router.post('/lista', listaControllers.nuevoLista );
    router.get('/lista/:idLista', listaControllers.mostrarLista );
    router.put('/lista/:idLista', listaControllers.actualizarLista );
    router.delete('/lista/:idLista', listaControllers.eliminarLista );

    router.get('/retoejercicios', retoEjerciciosControllers.mostrarRetoEjercicios );
    router.post('/retoejercicios', retoEjerciciosControllers.nuevoRetoEjercicios );
    router.get('/retoejercicios/:idRetoejercicio', retoEjerciciosControllers.mostrarRetoEjercicio );
    router.put('/retoejercicios/:idRetoejercicio', retoEjerciciosControllers.actualizarRetoEjercicio );
    router.delete('/retoejercicios/:idRetoejercicio', retoEjerciciosControllers.eliminarRetoEjercicio );

    router.get('/retojuego', retoJuegoControllers.mostrarRetoJuegos );
    router.post('/retojuego', retoJuegoControllers.nuevoRetoJuego );
    router.get('/retojuego/:idRetojuego', retoJuegoControllers.mostrarRetoJuego );
    router.put('/retojuego/:idRetojuego', retoJuegoControllers.actualizarRetoJuego );
    router.delete('/retojuego/:idRetojuego', retoJuegoControllers.eliminarRetoJuego );

    router.get('/retosaber', retoSaberControllers.mostrarRetoSabers );
    router.post('/retosaber', retoSaberControllers.nuevoRetoSaber );
    router.get('/retosaber/:idRetosaber', retoSaberControllers.mostrarRetoSaber );
    router.put('/retosaber/:idRetosaber', retoSaberControllers.actualizarRetoSaber );
    router.delete('/retosaber/:idRetosaber', retoSaberControllers.eliminarRetoSaber );

    return router;
}