const path = require('path');
const Capybara = require('../models/capybara');

exports.cerveza = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'cerveza_view.html'));
};

exports.get_nuevo = (request, response, next) => {
    console.log('GET /capybaras/nuevo');
    response.render('nuevo', {
        username: request.session.username ? request.session.username : '',
        info: ''
    });
};

exports.post_nuevo = (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    const capybara = new Capybara(request.body.nombre);
    capybara.save();
    request.session.info = capybara.nombre + ' fue registrado con éxito';
    response.setHeader('Set-Cookie', 'ultimo_capybara=' + capybara.nombre + '; HttpOnly');
    response.redirect('/capybaras');
};

exports.listar = (request, response, next) => {
    console.log('Ruta /capybaras');
    //console.log(request.get('Cookie').split('=')[1]);
    console.log(request.cookies);
    const info = request.session.info ? request.session.info : '';
    request.session.info = '';
    response.render('lista', {
        capybaras: Capybara.fetchAll(),
        username: request.session.username ? request.session.username : '',
        ultimo_capybara: request.cookies.ultimo_capybara ? request.cookies.ultimo_capybara : '',
        info: info //El primer info es la variable del template, el segundo la constante creada arriba
    });
}