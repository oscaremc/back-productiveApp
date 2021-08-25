const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

const userSchema = new Schema({
    name: { type: String, trim: true.valueOf, require: true },
    email: { type: String, trim: true, lowercase: true, unique:true, require: true },
    password: { type: String, trim: true },
}, {
    timestamps: true
});

userSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document = this;
        
        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
}


/*
// ### encriptar clave ###

//donde toma clave y la retorna cifrada
userSchema.methods.encryPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
//para cuando necesite confirmar la clave
userSchema.methods.matchPassword = function(password) {
    return bcrypt.compare(password, this.password);
}
*/
module.exports = model("Users", userSchema);