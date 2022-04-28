//const res = require("express/lib/response");
const Ticket = require("../models/tickets");

//Inicio de /buscar_tickets/activos
exports.get_activos= async(request, response, next)=>{
    let tipo=1;

    const total = await Ticket.getTotal_activos();
    console.log("En total hay: " + total);
    const start = request.params.start1 ? request.params.start1 : 0
    console.log(start);

    tickets=Ticket.fetchticketsactivos_pag(start)
        .then(([rows, fieldData]) => {
            respuestas=Ticket.fetchrespuestas()
            .then(([rows2, fieldData]) => { 
                //console.log(rows);
                response.render('Consulta', {
                    tickets: rows,
                    respuestas: rows2,
                    username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
                    rol: request.cookies.rolusuario ? request.cookies.rolusuario : 1,
                    tipo:tipo,
                    total_tickets: total,
                }); 
            })
        })
        .catch(err => {
            console.log(err);
        });
}

exports.post_activos = (request, response, next) => {
    console.log(request.body);
    Ticket.borrarticketpropio(request.body.idticket);
    response.redirect('/home');
}

// A partir de aqui inicia la implementación en ajax de buscar_activos
exports.buscar_activos = async (request, response, next) => {
    tickets = await Ticket.fetchticketsactivos_filtros(request.params.valor);
    for(let t in tickets[0]) {
        console.log(tickets[0][t].ID_ticket);
        tickets[0][t].respuestas = await Ticket.fetchrespuestas_busqueda(tickets[0][t].ID_ticket);
        console.log(tickets[0][t]);
    }
    console.log(tickets[0]);
    
    response.status(200).json({rows: tickets[0]});
}
//Final de /buscar_tickets/activos


//Inicio de /buscar_tickets/archivo
exports.get_archivo=async(request, response, next)=>{
let tipo=2;

const total = await Ticket.getTotal_archivados();
console.log("En total hay: " + total);
const start2 = request.params.start2 ? request.params.start2 : 0
console.log(start2);

tickets=Ticket.fetchticketsarchivados_pag(start2)
    .then(([rows, fieldData]) => {
        respuestas=Ticket.fetchrespuestas()
        .then(([rows2, fieldData]) => {
        response.render('Consulta', {
            tickets: rows,
            respuestas: rows2,
            username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
            rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
            tipo:tipo,
            total_tickets: total,
        }); 
    })
})
    .catch(err => {
        console.log(err);
    });
}

exports.post_archivo = (request, response, next) => {
    Ticket.borrarticketpropio(request.body.idticket);
    response.redirect('/home');
}

// A partir de aqui inicia la implementación en ajax de buscar_archivo
exports.buscar_archivo = async (request, response, next) => {
    tickets = await Ticket.fetchticketsarchivados_filtros(request.params.valor);
    for(let t in tickets[0]) {
        console.log(tickets[0][t].ID_ticket);
        tickets[0][t].respuestas = await Ticket.fetchrespuestas_busqueda(tickets[0][t].ID_ticket);
        console.log(tickets[0][t]);
    }
    console.log(tickets[0]);
    
    response.status(200).json({rows: tickets[0]});
}
//Final de /buscar_tickets/archivo


//Inicio de /buscar_tickets/propio
exports.get_ticketspropios=async(request, response, next)=>{
    let tipo=3;

    const total = await Ticket.getTotal_propios(request.cookies.correo_usuario);
    console.log("En total hay: " + total);
    const start3 = request.params.start3 ? request.params.start3 : 0

    tickets=Ticket.fetchticketspropios_pag(request.cookies.correo_usuario,start3)
    .then(([rows, fieldData]) => {
        console.log(rows);
        respuestas=Ticket.fetchrespuestas()
        .then(([rows2, fieldData]) => {
        response.render('Consulta', {
            tickets: rows,
            respuestas: rows2,
            username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
            rol: request.cookies.rolusuario ? request.cookies.rolusuario : 1,
            tipo:tipo,
            total_tickets: total,
        });
    }) 
    })
    .catch(err => {
        console.log(err);
    }); 
}
// A partir de aqui inicia la implementación en ajax de buscar_propio
exports.buscar_propios = async (request, response, next) => {
    let user_mail = request.cookies.correo_usuario;
    let idticket = request.params.valor
    let valor_completo = user_mail+'&'+idticket;
    tickets = await Ticket.fetchticketsusuario_filtro(valor_completo);
    for(let t in tickets[0]) {
        console.log(tickets[0][t].ID_ticket);
        tickets[0][t].respuestas = await Ticket.fetchrespuestas_busqueda(tickets[0][t].ID_ticket);
        console.log(tickets[0][t]);
    }
    console.log(tickets[0]);
    
    response.status(200).json({rows: tickets[0]});
}

exports.post_propios=(request, response, next)=>{
    Ticket.borrarticketpropio(request.body.idticket);
    response.redirect('/home'); 
}

//Final de /buscar_tickets/propio

exports.borrarpropios=(request, response, next)=>{
    Ticket.borrarticketpropio(request.body.idticket);
    response.redirect('/home');
}

exports.root = (request, response, next) => {
    response.redirect('/home'); 
};
