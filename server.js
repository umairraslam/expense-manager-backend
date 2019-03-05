const Hapi = require('hapi');
require('dotenv').config()

const start = async () => {
    const server = await new Hapi.Server({
        host: process.env.HOST?process.env.HOST:'0.0.0.0',
        port: process.env.PORT?process.env.PORT:8000,
        routes: {
            cors: true
        }
    });

    //registers swagger plugins
    await server.register(require("./config/hapi-plugins"))

    //Routes
    server.route((require('./routes/index')));

    //start the server
    await server.start();

    console.log(`Server listening on ${server.info.uri}`);
}

start()
    .catch(err => {
        console.log(err);
        process.exit(1);
    })
