const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const Users = model('Users');

const listaSchema = new Schema({
    cantidad_total_ciclos: { type: Number },
    ciclo_Descanso: { type: Array },
    user: { type: Schema.ObjectId, ref: "User" }
}, {
    timestamps: true
});

module.exports = model('Lista', listaSchema);