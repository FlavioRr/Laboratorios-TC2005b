const Tickets = require('../models/tickets');
const Prioridad = require('../models/prioridad');

exports.get_tic = (request, response, next) => {
    // const tic = Tickets.fetchticketSeleccionado(request.params.id)
    // console.log(tic);
    // const tic2 = Tickets.fetchresTiseleccionado(request.params.id)
    // console.log(tic2);
    console.log(request.params.id);
    console.log('Entrando a Asignar Prioridad');
    Tickets.fetchticketSeleccionado(request.params.id)
        .then(([rows, fieldData]) => {
            // console.log('Entrando a fetchTicketSEle');
            Tickets.fetchresTiseleccionado(request.params.id)
                .then(([rows2, fieldData]) => {
                    // console.log('WOW');
                    // console.log(rows);
                    // console.log(rows2);
                    response.render('APrioridad', {
                        id: request.params.id ? request.params.id : 1,
                        username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
                        rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
                        tickets: rows,
                        respuestas: rows2,
                    });
                })
                .catch(error => { console.log(error) });
        })
        .catch(error => { console.log(error) });
};

exports.post_prio = (request, response, next) => {
    console.log('hola?');
    const prioridad = new Prioridad(request.body.prioridad, request.params.id);
    console.log(prioridad);
    console.log('Iniciando update');
    prioridad.update()
    prioridad.updatenuevo()
    console.log('Terminando update');
    response.redirect('/home')

};

// exports.buscarR = (req,res,next) =>{
//     BusquedaR.fetchAll(req.params.valor)
//         .then(([rows, fieldData]) => {
//             console.log(rows);
//             res.status(200).json(rows);
//         })
//         .catch(error => {console.log(error)});  

// }

exports.root = (req, res, next) => {
    // console.log('Ruta por defecto de buscar usuario');
    res.redirect('/asignar_prioridad');
}