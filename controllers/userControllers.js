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

exports.mostrarUsers = async (req, res, next) => {
    try {
        const users = await Users.find({});
        res.json(users)
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.mostrarUser = async (req, res, next) => {
    const user = await Users.findById(req.params.idUser);
    if(!user) {
        res.json({mensaje: 'Ese User no existe'});
        next();
    }
    res.json(user);
}


exports.actualizarUser = async (req, res, next) => {
    try {
        const user = await Users.findOneAndUpdate({ _id : req.params.idUser },
            req.body, {
                new : true
            });
            res.json(user);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarUser = async (req, res, next) => {
    try {
        await Users.findOneAndDelete({_id : req.params.idUser});
        res.json({mensaje: 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}