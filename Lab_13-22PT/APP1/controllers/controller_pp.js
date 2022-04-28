const Categoria = require('../models/categorias');
const Pregunta = require('../models/preguntas');
const Gen_Tickets = require('../models/gen_ticket');
const Respuesta = require('../models/respuestas');
const Tickets = require('../models/tickets');

exports.get_principal = (request, response, next) => {
    console.log('Pantalla principal');
    Tickets.fetchticketsnuevos()
        .then(([rows, fielData]) => {
            Tickets.fetchrespuestas()
                .then(([rows2, fieldData]) => {
                    Tickets.fetchticketsusuario(request.cookies.correo_usuario)
                        .then(([rows3, fieldData]) => {
                            Tickets.fetchticketsencargado(request.cookies.correo_usuario)
                                .then(([rows4, fieldData]) => {
                                    console.log(rows3);
                                    console.log(request.cookies.nombre_usuario);
                                    let numrol = request.cookies.rolusuario;
                                    if (numrol == 3) {
                                        response.render('Primer_pantalla3', {
                                            username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
                                            ticketss: rows,
                                            respuestas: rows2,
                                            ticketsusuario: rows3,
                                            ticketobtenido: rows4,
                                            rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
                                        });
                                    } else {
                                        response.render('Primer_pantalla', {
                                            username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
                                            ticketss: rows,
                                            respuestas: rows2,
                                            ticketsusuario: rows3,
                                            ticketobtenido: rows4,
                                            rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
                                        });
                                    }
                                })
                        })
                })
        })
};
exports.post_principal = (request, response, next) => {
    console.log('Pantalla principal');
    Tickets.borrarticket(request.body.idticket);
    Tickets.borrarticketnuevo(request.body.idticket);
    response.redirect('/home');
};

// exports.post_comentario = (request, response, next) => {
//     console.log('Pantalla principal');
//     Tickets.modificarcomentario(request.body.comentario, request.body.idticket)
//     response.redirect('/home');
// };





// exports.get_mistickets = (request, response, next) => {
//     console.log('Pantalla principal');
//     Tickets.fetchmistickets()
//         .then(([rows, fielData]) => {
//             response.render('Primer_pantalla', {
//                 username: request.session.name ? request.session.name : '',
//                 ticketss: rows
//             });

//         })
// };

// exports.get_principal1 = (request, response, next) => {
//     console.log('Pantalla principal');
//     Tickets.fetchticketsactivos()
//         .then(([rows, fielData]) => {
//             response.render('Primer_pantalla', {
//                 username: request.session.name ? request.session.name : '',
//                 ticketsss: rows
//             });

//         })
//         .catch(error => { console.log(error) });
// };
// exports.get_genticket = (request, response, next) => {
//     Categoria.fetchAll()
//         .then(([rows, fielData]) => {
//             response.render('GenerarTicket', {
//                 Tiname: request.session.usuario ? request.session.usuario : '',
//                 categrias: rows,
//             });
//         })
//         .catch(error => { console.log(error) });
// };