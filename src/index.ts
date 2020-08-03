import dotenv from "dotenv";
dotenv.config({path: "src/.env"});
import app from "./app";
import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import dbConnOptions from "./ormconfig";

const PORT: number | string = 4242;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql"

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT
}

const handler = function() {
    console.log(`Server listening on ${PORT}`)
}

const errLogger = function(err) {
    console.log(err)
}

const run = async () => {
    try {
        await createConnection(dbConnOptions);
    } catch(err) {
        errLogger(err);
        return; 
    }
    try {
        app.start(appOptions, handler);
    } catch(err) {
        errLogger(err);
        return;
    }
};
// app.start(appOptions, handler);

run();

