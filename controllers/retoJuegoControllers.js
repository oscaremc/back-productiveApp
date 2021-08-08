const RetoJuego = require('../models/RetoJuego');

exports.nuevoRetoJuego = async (req, res, next) => {
    const retoJuego = new RetoJuego(req.body);

    try {
        // almacenar el registro
        await retoJuego.save();
        res.json({mensaje: 'se agrego un nuevo reto de Juego'});
    } catch (error) {
        // si hay un error, console.log y next
        console.log(error)
        next();
    }
}

exports.mostrarRetoJuegos = async (req, res, next) => {
    try {
        const retoJuego = await RetoJuego.find({});
        res.json(retoJuego)
    } catch (error) {
        // si hay un error, console.log y next
        console.log(error)
        next();
    }
}

exports.mostrarRetoJuego = async (req, res, next) => {
    const retoJuego = await RetoJuego.findById(req.params.idRetojuego);
    if(!retoJuego) {
        res.json({mensaje: 'Ese User no existe'});
        next();
    }
    res.json(retoJuego);
}

exports.actualizarRetoJuego = async (req, res, next) => {
    try {
        const retoJuego = await RetoJuego.findOneAndUpdate({ _id : req.params.idRetojuego },
            req.body, {
                new : true
            });
            res.json(retoJuego);
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.eliminarRetoJuego = async (req, res, next) => {
    try {
        await RetoJuego.findOneAndDelete({_id : req.params.idRetojuego});
        res.json({mensaje: 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}