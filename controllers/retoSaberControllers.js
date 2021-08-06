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
