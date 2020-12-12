const express = require( 'express' );
const path = require( 'path' );

// create an express application
const app = express();

/*********************/

// send a list of users
app.get( '/', ( req, res ) => {
    res.contentType( 'application/json' );
    res.sendFile( path.resolve( __dirname, 'db.json' ) );
} );

// serve images
app.use( '/images', express.static( path.resolve( __dirname, 'images' ) ) );

/*********************/

// listen on the `process.ENV.SERVER_PORT`
app.listen( process.env.SERVER_PORT, () => {
    console.log( `Server started at port ${ process.env.SERVER_PORT }.` );
} );