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
