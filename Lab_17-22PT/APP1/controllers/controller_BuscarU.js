const Busqueda = require('../models/usuario');

exports.get_usuarios = async(request, response, next)=>{

    const total = await Busqueda.getTotal_usuarios();
    console.log("En total hay: " + total);
    const start = request.params.start ? request.params.start : 0
    console.log(start);
    usuarios = Busqueda.fetchusuarios_pag(start)
        .then(([rows, fielData]) => {
            console.log( request.cookies.rolusuario);
            response.render('BuscarUsuarios', {
                usuario: rows,
                username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
                rol: request.cookies.rolusuario ? request.cookies.rolusuario: 3, 
                total_usuarios: total,
            });
        })
        .catch(error => { 
            console.log(error); 
        });
}

exports.buscar = (request, response, next) => {
    console.log(request.params.valor);
    Busqueda.fetch(request.params.valor)
        .then(([rows, fieldData]) => {
            //console.log(rows);
            response.status(200).json(rows);
        })
        .catch(error => { console.log(error) });

}

exports.root = (req, res, next) => {
    console.log('Ruta por defecto de buscar usuario');
    res.redirect('/home');
};