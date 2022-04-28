const Usuario = require('../models/usuario');

exports.get_usuario = (request, response, next) => {;
    console.log(request.params.id);
    console.log('Entrando al render de asignar rol');
    Usuario.fetchusuario_id(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('ARol', {
                id: request.params.id ? request.params.id : 1,
                username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
                rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
                user: rows[0],
            });
        })
        .catch(error => { console.log(error) });
};

exports.post_rol = (request, response, next) => {
    console.log('Entrando a la asignación de prioridad');
    const asignacion_rol = new Usuario(request.body.rol_nuevo, request.params.id);
    console.log(asignacion_rol);
    console.log('Iniciando update');
    asignacion_rol.update_rol()
    console.log('Terminando update');
    response.redirect('/buscar_usuario/busqueda')
};

exports.root = (req, res, next) => {
    // console.log('Ruta por defecto de buscar usuario');
    res.redirect('/asignar_rol');
}