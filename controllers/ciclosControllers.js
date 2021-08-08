const Ciclos = require('../models/Ciclos');

exports.nuevoCiclo = async (req, res, next) => {
    const ciclo = new Ciclos(req.body);

    try {
        // almacenar el registro
        await ciclo.save();
        res.json({mensaje: 'se agrego un nuevo ciclo'});
    } catch (error) {
        // si hay un error, console.log y next
        console.log(error)
        next();
    }
}

exports.mostrarCiclos = async (req, res, next) => {
    try {
        const ciclo = await Ciclos.find({});
        res.json(ciclo)
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.mostrarCiclo = async (req, res, next) => {
    const ciclo = await Ciclos.findById(req.params.idCiclo);
    if(!ciclo) {
        res.json({mensaje: 'Ese User no existe'});
        next();
    }
    res.json(ciclo);
}

exports.actualizarCiclo = async (req, res, next) => {
    try {
        const ciclo = await Ciclos.findOneAndUpdate({ _id : req.params.idCiclo },
            req.body, {
                new : true
            });
            res.json(ciclo);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarCiclo = async (req, res, next) => {
    try {
        await Ciclos.findOneAndDelete({_id : req.params.idCiclo});
        res.json({mensaje: 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}