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
