const Objective = require('../models/Objective');

exports.nuevoObjetive = async (req, res, next) => {
    const objective = new Objective(req.body);

    try {
        // almacenar el registro
        await objective.save();
        res.json({mensaje: 'se agrego un nuevo objetivo'});
    } catch (error) {
        // si hay un error, console.log y next
        console.log(error)
        next();
    }
}

exports.mostrarObjetives = async (req, res, next) => {
    try {
        const objective = await Objective.find({});
        res.json(objective)
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.mostrarObjetive = async (req, res, next) => {
    const objective = await Objective.findById(req.params.idObjetive);
    if(!objective) {
        res.json({mensaje: 'Ese Objetivo no existe'});
        next();
    }
    res.json(objective);
}


exports.actualizarObjetive = async (req, res, next) => {
    try {
        const objective = await Objective.findOneAndUpdate({ _id : req.params.idObjetive },
            req.body, {
                new : true
            });
            res.json(objective);
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.eliminarObjetive = async (req, res, next) => {
    try {
        await Objective.findOneAndDelete({_id : req.params.idObjetive});
        res.json({mensaje: 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}