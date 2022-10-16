import express from "express";
import path from "path";
import { validateEnvVars, getEnvVar } from './env'
const app = express();

// Healthz
app.get( "/healthz", ( req, res ) => {
    // render the index template
    res.send("OK");
});

// validate required env vars
validateEnvVars(process.env);

// start the express server
const port = getEnvVar('PORT');
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${port}` );
} );
