const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Ciclos = model('Ciclos');

const retoJuegoSchema = new Schema({
    pregunta: { type: String, trim: true },
    respuesta1: { type: String, trim: true },
    respuesta2: { type: String, trim: true },
    respuesta3: { type: String, trim: true },
    respuestaCorreta: { type: String, trim: true },
    ciclo: { type: Schema.ObjectId, ref: 'Ciclos' }
}, {
    timestamps: true
});

module.exports = model('RetoJuego', retoJuegoSchema);