import http from "http";
import path from 'path';
import { promises as fs } from 'fs';

global["__dirname"] = path.dirname(new URL(import.meta.url).pathname);

const server = http.createServer(async (req, res) => {
    // Desestructurando de "req"
    let { url, method } = req;

    console.log(`📣 CLIENT-REQUEST: ${req.url} ${req.method}`);

    // Enrutando peticiones
    switch (url) {
        case '/':
            // Peticion raiz
            // Estableciendo cabeceras
            res.setHeader('Content-Type', 'text/html');
            // Escribiendo la respuesta
            res.write(`
      <html>
        <head>
          <link rel="icon" type="image/png" sizes="32x32" href="https://img.icons8.com/fluency/256/domain.png">
          <title>My App</title>
        </head>
        <body> 
          <h1 style="color: #333">Hello from my server</h1>
          <p style="color: #34495E">Estas en el recurso raiz.</p>
        </body>
      </html>
      `);
            console.log(`📣 Respondiendo: 200 ${req.url} ${req.method}`);
            // Estableciendo codigo de respuesta
            res.statusCode = 200;
            // Cerrando la comunicacion
            res.end();
            break;
        case '/author':
            res.setHeader('Content-Type', 'text/html');
            res.write(
                `
                </html>
            <head>
          <title>Author: Jonatan Morales</title>
        </head>
        <body> 
          <center>
          <h1 style="color: #333">Hi, I'm Jonatan Arturo Morales Tavera</h1>
          <h3>I like development native Android apps with Kotlin</h3>
          <ul>
  <li>Im currently working on Momo Plants</li>
  <li>Im currently learning Flutter & Dart</li>
  <li>Im looking to collaborate on Calisteniapp</li>
  <li>Ask me about Kotlin & Android</li>
  <li>How to reach me <b>johnta2610@hotmail.com</b></li>
</ul>
</center>
        </body>
      </html>
            `
            );
            break;
        case '/favicon.ico':
            // Especificar la ubicación del archivo de icono
            const faviconPath = path.join(__dirname, 'favicon.ico');
            const data = await fs.readFile(faviconPath);
            res.writeHead(200, { 'Content-Type': 'image/x-icon' });
            res.end(data);
            break
        default:
            // Peticion raiz
            // Estableciendo cabeceras
            res.setHeader('Content-Type', 'text/html');
            // Escribiendo la respuesta
            res.write(`
      <html>
        <head>
          <link rel="icon" type="image/png" sizes="32x32" href="https://img.icons8.com/fluency/256/domain.png">
          <title>My App</title>
        </head>
        <body> 
          <h1>&#128534; 404 Recurso no encontrado</h1>
          <p>Lo sentimos pero no tenemos lo que buscas...</p>
        </body>
      </html>
      `);
            console.log(`📣 Respondiendo: 404 ${req.url} ${req.method}`);
            // Estableciendo codigo de respuesta
            res.statusCode = 404;
            // Cerrando la comunicacion
            res.end();
            break;
    }
});

server.listen(3000, "0.0.0.0", () => {
    console.log("👩‍🍳 Servidor escuchando en http://localhost:3000");
});