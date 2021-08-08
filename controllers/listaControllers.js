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

exports.mostrarListas = async (req, res, next) => {
    try {
        const lista = await Lista.find({});
        res.json(lista)
    } catch (error) {
        // si hay un error, console.log y next
        console.log(error)
        next();
    }
}


exports.mostrarLista = async (req, res, next) => {
    const lista = await Lista.findById(req.params.idLista);
    if(!lista) {
        res.json({mensaje: 'Ese User no existe'});
        next();
    }
    res.json(lista);
}

exports.actualizarLista = async (req, res, next) => {
    try {
        const lista = await Lista.findOneAndUpdate({ _id : req.params.idLista },
            req.body, {
                new : true
            });
            res.json(lista);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarLista = async (req, res, next) => {
    try {
        await Lista.findOneAndDelete({_id : req.params.idLista});
        res.json({mensaje: 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}
