const Metricas = require('../models/metricas');
const Categoria = require('../models/categorias');

exports.getmetricas = async(request, response, next) => {
    Metricas.fechas()
    .then(([rows3,fielData]) => {
        let fechas= [];
        for (let fecha of rows3){
            fechas.push(fecha.Fechas);
        }
        console.log(fechas);
    // Gráfica #1 (tiempos por categoría)
    Metricas.tiemposCat() 
        .then(([rows,fielData]) => {
            //console.log(rows);
            let numeros= [];
            for (let dato of rows){
                numeros.push(dato.info_metrica);
            }
            Metricas.nombresCat()
                .then(([rows2, fielData]) => {
                    let cats= [];
                    for (let cat of rows2){
                        cats.push(cat.nombre_categoria);
                    }

                    Metricas.ticketsemitidos()
                    .then(([rows4, fielData]) => {
                        let te=[];
                        for (let tee of rows4){
                            te.push(tee.fecha_emision);
                        }
                        console.log(numeros)
                        Metricas.ticketsresueltos()
                        .then(([rows5, fielData]) => {
                            let tr=[];
                            for (let trr of rows5){
                                tr.push(trr.fecha_fin);
                            }

                    response.render('metricas', {
                        tiempos: numeros,
                        categorias: cats,
                        dates: fechas,
                        ticketsemitidos: te,
                        ticketsresueltos: tr,
                        rol: request.cookies.rolusuario ? request.cookies.rolusuario : 3,
                        username: request.cookies.nombre_usuario ? request.cookies.nombre_usuario : ''
                    });  
                })
            })
        })
    })
                .catch(error => {console.log(error)});
        })
        .catch(error => {console.log(error)});
    


    //response.render('metricas');
};