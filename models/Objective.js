const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const Users = model('Users');

const objetiveSchema = new Schema({
    fecha_objetivo: { type: String, trim: true },
    nombre_objetivo: { type: String, trim: true, require: true },
    hora_planeada: { type: String, require: true },
    tiempo_trabajo: { type: Number },
    tiempo_descanso: { type: Number },
    cantidad_ciclos: { type: Number },
    ciclos_total: { type: Array },
    status: { type: Boolean },
    user: { type: Schema.ObjectId, ref: Users }
}, {
    timestamps: true
});

module.exports = model('Objective', objetiveSchema);

