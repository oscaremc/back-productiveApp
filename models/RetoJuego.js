const { Schema, model } = require('mongoose');
const Ciclos = mongoose.model('Ciclos');

const retoJuegoSchema = new Schema({
    ciclo: { type: Scheme.ObjectId, ref: "Ciclos" },
    pregunta: { type: String, trim: true },
    respuesta1: { type: String, trim: true },
    respuesta2: { type: String, trim: true },
    respuesta3: { type: String, trim: true },
    respuestaCorreta: { type: String, trim: true },
}, {
    timestamps: true
});

module.exports = model('RetoJuego', retoJuegoSchema);