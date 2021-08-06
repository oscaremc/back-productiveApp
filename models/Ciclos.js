const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Objective = model('Objective');

const ciclosSchema = new Schema({
    verificador_descanso: { type: Boolean },
    fh_trabajo_inicio: { type: String },
    fh_trabajo_fin: { type: String },
    tiempo_trabajo: { type: Number },
    fh_descanso_inicio: { type: String },
    fh_descanso_fin: { type: String },
    tiempo_descanso: { type: Number },
    objective: { type: Schema.ObjectId, ref: 'Objective' },
}, {
    timestamps: true
});

module.exports = model('Ciclos', ciclosSchema);