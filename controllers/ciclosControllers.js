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