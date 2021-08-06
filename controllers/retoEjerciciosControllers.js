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
