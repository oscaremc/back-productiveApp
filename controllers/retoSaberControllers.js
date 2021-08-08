const RetoSaber = require('../models/RetoSaber');

exports.nuevoRetoSaber = async (req, res, next) => {
    const retoSaber = new RetoSaber(req.body);

    try {
        // almacenar el registro
        await retoSaber.save();
        res.json({mensaje: 'se agrego un nuevo reto de saber'});
    } catch (error) {
        // si hay un error, console.log y next
        console.log(error)
        next();
    }
}

exports.mostrarRetoSabers = async (req, res, next) => {
    try {
        const retoSaber = await RetoSaber.find({});
        res.json(retoSaber)
    } catch (error) {
        // si hay un error, console.log y next
        console.log(error)
        next();
    }
}

exports.mostrarRetoSaber = async (req, res, next) => {
    const retoSaber = await RetoSaber.findById(req.params.idRetosaber);
    if(!retoSaber) {
        res.json({mensaje: 'Ese User no existe'});
        next();
    }
    res.json(retoSaber);
}

exports.actualizarRetoSaber = async (req, res, next) => {
    try {
        const retoSaber = await RetoSaber.findOneAndUpdate({ _id : req.params.idRetosaber },
            req.body, {
                new : true
            });
            res.json(retoSaber);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarRetoSaber = async (req, res, next) => {
    try {
        await RetoSaber.findOneAndDelete({_id : req.params.idRetosaber});
        res.json({mensaje: 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}