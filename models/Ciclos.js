const { Schema, model } = require('mongoose');
const Objective = mongoose.model('Objective');

const ciclosSchema = new Schema({
    objective: { type: Scheme.ObjectId, ref: "Objective" },
    verificador_descanso: { type: Boolean },
    fh_trabajo_inicio: { type: Number },
    fh_trabajo_fin: { type: Number },
    tiempo_trabajo: { type: Number },
    fh_descanso_inicio: { type: Number },
    fh_descanso_fin: { type: Number },
    tiempo_descanso: { type: Number },
}, {
    timestamps: true
});

module.exports = model('Ciclos', ciclosSchema);