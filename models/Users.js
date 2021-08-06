const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, trim: true.valueOf, require: true },
    email: { type: String, trim: true, lowercase: true, unique:true, require: true },
    password: { type: String, trim: true, require: true },
}, {
    timestamps: true
});

module.exports = model("Users", userSchema);

/*

// ### encriptar clave ###

//instalar modulo
const bcrypt = require('bcryptjs');
//donde toma clave y la retorna cifrada
userSchema.methods.encryPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
//para cuando necesite confirmar la clave
userSchema.methods.matchPassword = function(password) {
    return await bcrypt.compare(password, this.password);
}

*/