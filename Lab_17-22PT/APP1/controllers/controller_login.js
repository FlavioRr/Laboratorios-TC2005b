const User = require('../models/model_login');
const Usuario = require('../models/usuario');
const Ticket = require("../models/tickets");
const bcrypt = require('bcryptjs');
var correo_usuario = '';

exports.get_login = (request, response, next) => {
    response.render('Log_in',{
        error: 0
    });
};

exports.get_login2 = (request, response, next) => {
    response.render('Log_in',{
        error: 1
    });
};

exports.login = (request, response, next) => {
    console.log('Entrando a fetchOne');
    correo_usuario = (request.body.correo).toLowerCase();
    User.findOne(request.body.correo)
        .then(([rows, fielData]) => {
            
            //Si no existe el usuario, redirige a la pantalla de login
            if (rows.length < 1) {
                return response.redirect('/users/loginw');
            }
            const user = new User(rows[0].ID_rol, rows[0].nombre, rows[0].apellido_paterno, rows[0].apellido_materno, rows[0].correo, rows[0].password);

            const rolusuario = rows[0].ID_rol
            response.cookie('rolusuario', rolusuario, {
                httpOnly: true
            })

            const id_usuario = Usuario.getidusuario(rows[0].correo)
            response.cookie('id_usuario', id_usuario, {
                httpOnly: true
            })

            const correo_usuario = rows[0].correo
            response.cookie('correo_usuario', correo_usuario, {
                httpOnly: true
            })

            const nombre_usuario = rows[0].nombre
            response.cookie('nombre_usuario', nombre_usuario, {
                httpOnly: true
            })

            console.log(request.body.password);
            console.log(user.password);
            bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        console.log('Pass coinciden');
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        request.session.username = user.nombre;
                        return request.session.save(err => {
                            response.redirect('/home');
                        });
                    }
                    else{
                        response.redirect('/users/loginw');
                    }

                }).catch(err => {
                    console.log('Hola');
                    
                });
        }).catch((error) => {
            console.log(error)
        });
};

exports.get_signup = (request, response, next) => {
    response.render('signup', {
        username: request.session.usuario ? request.session.usuario : '',
        info: ''
    });
};

exports.post_signup = (request, response, next) => {
    console.log(request.body);
    const user = new User(3, request.body.nombre, request.body.ApellidoP, request.body.ApellidoM, request.body.email, request.body.passwords);
    user.save()
        .then(() => {
            response.redirect('Log_In');
        }).catch((error) => {
            console.log(error);
            console.log('Aqui esta el error');
        });
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('Log_In'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_ticketspropios = (request, response, next) => {
    let tipo = 3;
    tickets = Ticket.fetchticketsusuario(correo_usuario)
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('Consulta', {
                tickets: rows,
                username: request.session.nombre ? request.session.nombre : '',
                tipo: tipo,
                rol: request.cookies.rolusuario ? request.cookies.rolusuario : 1,
            });
        })
        .catch(err => {
            console.log(err);
        });
    //response.render('Consulta',{
    //ticket:ticket,
    //  tipo:tipo,
    //});
}
exports.borrarpropios = (request, response, next) => {
    Ticket.borrarticketpropio(request.body.idticket);
    response.redirect('/users/login');
}

exports.root = (request, response, next) => {
    response.redirect('/users/login');
};