const Lista = require('../models/Lista');

exports.nuevoLista = async (req, res, next) => {
    const lista = new Lista(req.body);

    try {
        // almacenar el registro
        await lista.save();
        res.json({mensaje: 'se agrego un nuevo cliente'});
    } catch (error) {
        // si hay un error, console.log y next
        console.log(error)
        next();
    }
}
