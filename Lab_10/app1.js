const capybaras = ["Pedro", "Poncho", "Pablo", "Patricio"];

const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Capybaras</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de capybaras</h1>');
        response.write('<p>Tenemos los siguientes capybaras:</p>');
        response.write('<ul>');
        for (let i in capybaras) {
            response.write('<li>' + capybaras[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br><br>');
        response.write('<a href="nuevo">Agregar un nuevo capybara</a>');
        response.write('<h1 id="principal">/</h1>');
        response.write('<a href="somos">Quienes somos</a>');
        response.write('<h1 id="principal">/</h1>');
        response.write('<a href="hola">Hola</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/somos' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Capybaras</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de capybaras</h1>');
        response.write('<h2>Somos los mejores capybaras del oeste :</h2>');
        response.write('<a href="/">Regresar a la lista de capybaras</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/hola' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Hola</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de capybaras</h1>');
        response.write('<h2>Hola</h2>');
        response.write('<a href="/">Regresar a la lista de capybaras</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/nuevo' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Capybaras</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de capybaras</h1>');
        response.write('<h2>Aqu?? nacen los capybaras:</h2>');
        response.write('<form action="nuevo" method="POST">');
        response.write('<label for="nombre">Nombre: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Pedro">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de capybaras</a>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/nuevo' && request.method === 'POST') {
        console.log("POST");
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            capybaras.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>Capybaras</title>');
            response.write('</head><body>');
            response.write('<h1 id="principal">Este sitio es de capybaras</h1>');
            response.write('<p>Tenemos los siguientes capybaras:</p>');
            response.write('<ul>');
            for (let i in capybaras) {
                response.write('<li>' + capybaras[i] + '</li>');
            }
            response.write('</ul>');
            response.write('<br><br>');
            response.write('<a href="nuevo">Agregar un nuevo capybara</a>');
            response.write('</body>');
            return response.end();
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Capybaras | Not found</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este capybara no existe, amigo.</h1>');
        response.write('</body>');
        response.end();
    }


});


server.listen(3000);