const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Ciclos = model('Ciclos');

const retoSaberSchema = new Schema({
    enbabezado: { type: String, trim: true },
    contenido: { type: String, trim: true },
    ciclo: { type: Schema.ObjectId, ref: "Ciclos" }
}, {
    timestamps: true
});

module.exports = model('RetoSaber', retoSaberSchema);
