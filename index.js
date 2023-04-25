

/*
    Dev Containers: Add...
    Javascript & MongoDB
    Version 18

    Crear un proyecto de JS en Node

        Package.json Personalizado
        npm init -> dwpc1-2023a -> 1.0.0 -> Proyecto de aprendizaje de la materia de Pila Completa 1
        index.js ->  -> #repositorio -> node, express, itgam -> @johnmorales -> MIT 

        Crear una nueva llave dentro del Package.json
        "type": "module",
        "engines": {
            "node": "18.x",
            "npm": "9.x"
        },

        "scripts": {
            "start": "node ./"
        }

        <------------------------------------------------------------------------------------------------------------->

        Package.json Rapido
        npm init -y
*/

//  1. Importando el modulo de Node HTTP
import http from 'http';
import path from 'path';
// --> let http = require('http');

//  Recreando Built-In Variables
global["__dirname"] = path.dirname(new URL(import.meta.url).pathname);
global["__filename"] = path.join(__dirname, path.basename(new URL(import.meta.url).pathname));

//  2. Crear el servidor con toda la logica
const server = http.createServer((request, response) => {
    //  Toda la logica del servidor
    //  1. Respondiendo al cliente
    response.write(`
    __dirname: ${__dirname}
    __filename: ${__filename}
    `);
    //  2. Cerrar la conexion
    response.end();
});

//  3. Encender el servidor
server.listen(3000, "0.0.0.0", () => {
    console.log("Servidor escuchando en http://localhost:3000");
});