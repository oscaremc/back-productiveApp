const Users = require('../models/Users');

exports.nuevoUser = async (req, res, next) => {
    const user = new Users(req.body);

    try {
        // almacenar el registro
        await user.save();
        res.json({mensaje: 'se agrego un nuevo cliente'});
    } catch (error) {
        // si hay un error, console.log y next
        console.log(error)
        next();
    }
}
