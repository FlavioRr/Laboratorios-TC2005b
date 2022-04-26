console.log("hola desde node");
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'hola desde node');

function promedio(array) {
    let prom;
    for (let i = 0; i < array.length; i++) {
        let suma = 0;
        suma = suma + array[i];
        prom = suma / (array.length)

    }
    return prom;
}
const c = [0, 1, 34, 2, 53, 45, 5];

function alreves(a) {;
    var a = a.toString();
    a = a.split('');
    a = a.reverse();
    a = a.join('');
    a = parseFloat(a);
    let respuesta = "Tu numero al reves es: " + a;
    return respuesta;
}

const http = require('http');
const num = 45456789;
const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(promedio(c));
    console.log(alreves(num))
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Laboratorio 8 </title></head><body><h5>la cerveza es buena y bonita</h5></body></html>');
    response.end();
});

server.listen(3000);