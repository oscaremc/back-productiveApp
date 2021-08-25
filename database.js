const mongoose = require('mongoose');

//conectar mongo
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbproductiveapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true, 
    useCreateIndex: true,
})
    .then(db => console.log('Conexion completa a la base de datos!'))
    .catch(err => console.log(err));