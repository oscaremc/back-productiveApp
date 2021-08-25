
const jwt = require("jsonwebtoken")
const Users = require('../models/Users');

exports.nuevoUser = async (req, res, next) => {
    const user = new Users(req.body);

    try {
        const savedUser = await user.save();

        const token = jwt.sign({ id: savedUser._id }, 'products-api', {
            expiresIn: 86400, // 24 hours
          });
        
        res.json({token})
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.signin = async (req, res) => {
    const {email, password} = req.body;
    const userFound = await Users.findOne({email: req.body.email})

    if(!userFound) return res.status(400).json({message: "Email no encontrado"})

    const matchPassword = await Users.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, massage: 'INCORRECTO PASSWORD'})

    console.log(userFound)

    res.json({token: ''})
}

exports.auth = async(req, res) => {
    const {email, password} = req.body;
    Users.findOne({email}, (err, user) =>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR AL USUARIO');
        }else if(!user){
            res.status(500).send('EL USUARIO NO EXISTE');
        }else{
            user.isCorrectPassword(password, (err, result) =>{
                if (err) {
                    res.status(500).send('ERROR AL AUTENTICAR');
                } else if(result){
                    res.status(200).send('USURIO AUTENTICADO CORRECTAMENTE');
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
                }
            });
        }
    })
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