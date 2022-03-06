const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Capybaras</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de capybaras</h1>');
        response.write('</body>');
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Capybaras | Not found</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este capybara no existe, amigo.</h1>');
        response.write('</body>');
        response.end();
    }
})

server.listen(3000);