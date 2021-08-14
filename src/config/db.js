const mongoose = require('mongoose');
const { environment } = require('./environments/environment');

const connectDatabase = async () => {
    try{
        await mongoose.connect(environment.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log('Base de datos conectada');
    }catch(e){
        console.log('Error al conectar base de datos');
    }
}

module.exports = connectDatabase;