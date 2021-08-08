const RetoEjercicios = require('../models/RetoEjercicios');

exports.nuevoRetoEjercicios = async (req, res, next) => {
    const retoEjercicios = new RetoEjercicios(req.body);

    try {
        // almacenar el registro
        await retoEjercicios.save();
        res.json({mensaje: 'se agrego un nuevo reto de ejercicios'});
    } catch (error) {
        // si hay un error, console.log y next
        console.log(error)
        next();
    }
}


exports.mostrarRetoEjercicios = async (req, res, next) => {
    try {
        const retoEjercicios = await RetoEjercicios.find({});
        res.json(retoEjercicios)
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.mostrarRetoEjercicio = async (req, res, next) => {
    const retoEjercicios = await RetoEjercicios.findById(req.params.idRetoejercicio);
    if(!retoEjercicios) {
        res.json({mensaje: 'Ese User no existe'});
        next();
    }
    res.json(retoEjercicios);
}

exports.actualizarRetoEjercicio = async (req, res, next) => {
    try {
        const retoEjercicios = await RetoEjercicios.findOneAndUpdate({ _id : req.params.idRetoejercicio },
            req.body, {
                new : true
            });
            res.json(retoEjercicios);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarRetoEjercicio = async (req, res, next) => {
    try {
        await RetoEjercicios.findOneAndDelete({_id : req.params.idRetoejercicio});
        res.json({mensaje: 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}