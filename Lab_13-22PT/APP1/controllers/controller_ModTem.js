const Categoria = require('../models/categorias');
const Pregunta = require('../models/preguntas');
const Preguntan = require('../models/news_preguntas');

exports.get_ticket = (request, response, next) => {
    Categoria.fetchAll()
        .then(([rows, fielData]) => {
            console.log( request.cookies.rolusuario);
            response.render('ModificarTemplate', {
                Tiname: request.session.usuario ? request.session.usuario : '',
                categorias: rows,
                rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
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
                    response.render('ModTem', {
                        Tiname: request.session.usuario ? request.session.usuario : '',
                        categorias: rows,
                        preguntas: rows2,
                        id: request.params.id ? request.params.id : 1,
                        rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
                        username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',
                    }); 
                }) 
                .catch(error => {console.log(error)}); 
        }) 
    .catch(error => {console.log(error)});
};
exports.post_mod = (request, response, next) => {
    console.log('Esto es antes de declarar constructores')
    const categoria = new Categoria( request.body.titulo, request.body.tiempo, request.params.id);
    console.log('Esto es antes de categoria.update()');
    console.log(categoria);
    categoria.update()
    console.log('Esto es antes de pregunta.update()');
    console.log(request.body); 

    if(Array.isArray(request.body.texto_pregunta) == true){
        if (request.body.texto_pregunta.length == request.body.text_preg.length) {
            for (let index = 0; index <= request.body.texto_pregunta.length; index++) {
                // console.log(index);
                if (request.body.texto_pregunta[index] != null) {
                    
                    const pregunta = new Pregunta(request.body.texto_pregunta[index], request.params.id,request.body.ID_pregunta)
                    // console.log(pregunta);
                    pregunta.update()
                
                }
                
            }
        }
        if (request.body.texto_pregunta.length > request.body.text_preg.length) {
            for (let index = 0; index <= request.body.texto_pregunta.length; index++) {
                
                // console.log(index);
                if ((request.body.texto_pregunta[index] != null) && (request.body.text_preg[index] != null)) {
                    
                    const pregunta = new Pregunta(request.body.texto_pregunta[index], request.params.id,request.body.ID_pregunta)
                    // console.log(pregunta);
                    pregunta.update()
                
                }
                if ((request.body.texto_pregunta[index] != null) && (request.body.text_preg[index] == undefined)) {
                    
                    const pregunta = new Preguntan(request.body.texto_pregunta[index])
                    // console.log(pregunta);
                    pregunta.save(request.params.id)
                
                }
                
            }
        }
        if (request.body.texto_pregunta.length < request.body.text_preg.length) {
            for (let index = 0; index <= request.body.texto_pregunta.length; index++) {
                
                // console.log(index);
                if ((request.body.texto_pregunta[index] != null) && (request.body.text_preg[index] != null)) {
                    
                    const pregunta = new Pregunta(request.body.texto_pregunta[index], request.params.id,request.body.ID_pregunta)
                    // console.log(pregunta);
                    pregunta.update()
                
                }
                if ((request.body.texto_pregunta[index] == undefined) && (request.body.text_preg[index] != null)) {
                    
                    const pregunta = new Preguntan(request.body.texto_pregunta[index])
                    // console.log(pregunta);
                    pregunta.delete(request.params.id, request.body.idtext_preg)
                
                }
                
            }
        }
        
    }
    if(Array.isArray(request.body.texto_pregunta) == false){

        const pregunta = new Pregunta(request.body.texto_pregunta, request.params.id,request.body.ID_pregunta)
        // console.log(pregunta);
        pregunta.update()
    }

    response.redirect('/home')
};

exports.root = (request, response, next) => {
    response.redirect('/modificar_template'); 
};
