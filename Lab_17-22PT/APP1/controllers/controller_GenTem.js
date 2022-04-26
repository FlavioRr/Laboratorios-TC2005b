const Categoria = require('../models/news_categorias');
const Pregunta = require('../models/news_preguntas');

exports.get_gentem = (request, response, next) => {
        console.log('Aqui inicia generar template');
            response.render('GenTem', {rol: request.cookies.rolusuario ? request.cookies.rolusuario: 3, username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : '',});  
};
exports.post_gentem = async(request, response, next) =>{
    // console.log(request.body);
    // console.log('Esto es antes de declarar constructores')
    const categoria = new Categoria( request.body.titulo, request.body.tiempo);
    // console.log('Esto es antes de categoria.update()');
    // console.log(categoria);
    await categoria.save()

    const idcategoria = await categoria.obtenerid()
    const idcat = Object.values(idcategoria[0])
    // console.log(idcat[0]);
    const idc = Object.values(idcat[0])
    // console.log(idc[0]); 
    const id = idc[0]
    // console.log(id);

    // console.log('Esto es antes de pregunta.add()');
    // console.log(request.body); 
    if(Array.isArray(request.body.texto_pregunta) == true){
        
        for (let index = 0; index <= request.body.texto_pregunta.length; index++) {
            // console.log(index);
            if (request.body.texto_pregunta[index] != null) {
                
                const pregunta = new Pregunta(request.body.texto_pregunta[index])
                // console.log(pregunta);
                pregunta.save(id)
            
            }
        }
    }
    if(Array.isArray(request.body.texto_pregunta) == false){

        const pregunta = new Pregunta(request.body.texto_pregunta)
        // console.log(pregunta);
        pregunta.save(id)
    }
    
    
    response.redirect('/home')

}

exports.root = (request, response, next) => {
    response.redirect('/generar_template'); 
};  
