const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Ciclos = model('Ciclos');

const retoEjerciciosSchema = new Schema({
    ejercicio1: { type: String, trim: true },
    link1: { type: String, trim: true },
    ejercicio2: { type: String, trim: true },
    link2: { type: String, trim: true },
    ejercicio3: { type: String, trim: true },
    link3: { type: String, trim: true },
    ejercicio4: { type: String, trim: true },
    link4: { type: String, trim: true },
    ciclo: { type: Schema.ObjectId, ref: "Ciclos" }
}, {
    timestamps: true
});

module.exports = model('RetoEjercicios', retoEjerciciosSchema);