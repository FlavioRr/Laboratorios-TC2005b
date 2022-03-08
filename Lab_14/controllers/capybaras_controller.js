const path = require('path');
const Capybara = require('../models/capybara');

exports.cerveza = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'cerveza_view.html'));
};

exports.get_nuevo = (request, response, next) => {
    console.log('GET /capybaras/nuevo');
    response.render('nuevo', { nombre: 'Lalo' });
};

exports.post_nuevo = (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    const capybara = new Capybara(request.body.nombre);
    capybara.save();
    response.setHeader('Set-Cookie', 'ultimo_capybara=' + capybara.nombre);
    response.redirect('/capybaras');
};

exports.listar = (request, response, next) => {
    console.log('Ruta /capybaras');
    console.log(request.get('Cookie').split('=')[1]);
    console.log(request.cookies);
    response.render('lista', {
        capybaras: Capybara.fetchAll(),
        ultimo_capybara: request.cookies.ultimo_capybara ? request.cookies.ultimo_capybara :
            " "
    });
    response.render('lista', { capybaras: Capybara.fetchAll() });
}