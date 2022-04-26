const Tickets = require('../models/tickets');

exports.get_comentario = (request, response, next) => {
    // const tic = Tickets.fetchticketSeleccionado(request.params.id)
    // console.log(tic);
    // const tic2 = Tickets.fetchresTiseleccionado(request.params.id)
    // console.log(tic2);
    console.log(request.params.id);
    console.log('Entrando a modificar comentario');
    Tickets.fetchticketSeleccionado(request.params.id)
        .then(([rows, fieldData]) => {
            console.log('Entrando a fetchTicketSEle');
            // console.log('WOW');
            // console.log(rows);
            // console.log(rows2);
            response.render('Mod_Comentario', {
                id: request.params.id ? request.params.id : 1,
                username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
                rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
                tickets: rows,
            });
        })
        .catch(error => { console.log(error) });
};


exports.post_comentario = (request, response, next) => {
    console.log('hola?');
    console.log();
    console.log('Iniciando update');
    Tickets.modificarcomentario(request.body.comentario, request.params.id)
    console.log('Terminando update');
    response.redirect('/home');
};


exports.root = (req, res, next) => {
    // console.log('Ruta por defecto');
    res.redirect('/mod_comentario');
}