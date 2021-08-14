// Servidor de Express
const express  = require('express');
const http     = require('http');
//const socketio = require('socket.io');
const path     = require('path');
const cors     = require('cors');
const db = require('./config/db');
//const Sockets  = require('./sockets');

class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer( this.app );
        
        // Configuraciones de sockets
        //this.io = socketio( this.server, { /* configuraciones */ } );
    }

    middlewares() {
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../src/public' ) ) );

        // CORS
        this.app.use( cors() );

        this.app.use(express.json())

    }



    routes() {
        //this.app.use('/api/project', require('./routes/project.route'));
        
    }

    // Esta configuración se puede tener aquí o como propieda de clase
    // depende mucho de lo que necesites
    configurarSockets() {
        //new Sockets( this.io );
    }

    execute() {

        db();


        // Inicializar Middlewares
        this.middlewares();

        // Inicializar sockets
        //this.configurarSockets();

        this.routes();

        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }

}


module.exports = Server;