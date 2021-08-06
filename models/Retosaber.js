const { Schema, model } = require('mongoose');
const Ciclos = mongoose.model('Ciclos');

const retoSaberSchema = new Schema({
    ciclo: { type: Scheme.ObjectId, ref: "Ciclos" },
    enbabezado: { type: String, trim: true },
    contenido: { type: String, trim: true },
}, {
    timestamps: true
});

module.exports = model('RetoSaber', retoSaberSchema);