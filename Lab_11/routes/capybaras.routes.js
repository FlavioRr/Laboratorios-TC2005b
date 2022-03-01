const capybaras = ["Pedro", "Ronaldo"];

app.use('/capybaras', (request, response, next) => {
    console.log("ruta capybaras");
    console.log(request.body);
    response.send('Respuesta de la ruta "/capybaras"');
    for (let i in capybaras) {
        var nombres = '<li>' + capybaras[i] + '</li>'
    }
    let Respuesta1 = '<li>' + nombres + '</li>';
});