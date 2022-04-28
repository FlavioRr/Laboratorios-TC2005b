const Categoria = require('../models/categorias');
const Pregunta = require('../models/preguntas');
const Gen_Tickets = require('../models/gen_ticket');
const Respuesta = require('../models/respuestas');
const { idpreg } = require('../models/preguntas');

exports.get_genticket = (request, response, next) => {
    Categoria.fetchAll()
        .then(([rows, fielData]) => {
            response.render('GenerarTicket', {
                Tiname: request.session.usuario ? request.session.usuario : '',
                categorias: rows,
                rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
                nombre: request.params.nombre,
                username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
            }); 
        }) 
    .catch(error => {console.log(error)});
};

exports.get_preguntas = (request, response, next) => {
    console.log(request.params.id);
    //Categoria.fetchOne(request.params.id)
    Categoria.fetchAll()    
        .then(([rows, fielData]) => {
            console.log('Entrando a categoria');
            Pregunta.fetchPreguntas(request.params.id)
                .then(([rows2, fielData]) => {
                    console.log('Entrando a pregunta y render');
                    response.render('TiGen', {
                        Tiname: request.session.usuario ? request.session.usuario : '',
                        rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
                        categorias: rows,
                        preguntas: rows2,
                        id: request.params.id ? request.params.id : 1,
                        nombre: request.params.nombre,
                        username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
                    }); 
                }) 
                .catch(error => {console.log(error)}); 
        }) 
    .catch(error => {console.log(error)});
};

exports.post_genticket = async(request,response, next) => {
    console.log('POST /ticket/nuevo');
    console.log(request.body);
    const ticket = new Gen_Tickets(request.params.id, request.body.titulo, request.body.descripcion);
    console.log('Esto es antes de ticket.save()');
    console.log(ticket);
    ticket.save();
    ticket.registrarFecha(request.cookies.correo_usuario);
    console.log('Esto es después de ticket.save()');

    
    const ArrayResp = request.body.respuesta;   // Aqui tenemos las respuestas
    

    const ArrayofArrayIDs = await idpreg(request.params.id);
    console.log(ArrayofArrayIDs);
    ArrayIDs = ArrayofArrayIDs[0];
    console.log(ArrayIDs);
    console.log(ArrayIDs[0].ID_pregunta);

    if (Array.isArray(ArrayResp)){
        for (let i = 0; i<ArrayResp.length; i++){
            Respuesta.save(ArrayIDs[i].ID_pregunta, ArrayResp[i]);
        }
    }
    else {
        Respuesta.save(ArrayIDs[0].ID_pregunta, ArrayResp);
    }
 
    response.redirect('/home')

};

exports.root = (request, response, next) => {
    response.redirect('/generar_ticket'); 
};
