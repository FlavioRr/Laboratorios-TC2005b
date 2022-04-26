const db = require('../util/database');
 
module.exports = class Categoria {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
     constructor(nombre_categoria, tiempo_estimado, ID_categoria) {
         this.nombre_categoria = nombre_categoria;
         this.tiempo_estimado = tiempo_estimado;
         this.ID_categoria = ID_categoria;
    //     this.descripcion = descripcion;
    //     this.ID_pregunta = ID_pregunta;
    //     this.texto_pregunta = texto_pregunta;
         }
    //El metodo save no es necesario dentro de la función

    // save() {
    //     return db.execute(
    //         []);
    // }
 
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute(
            'SELECT * FROM categoria WHERE disponible=1');
    }
    
    static fetchOne(num) {
        return db.execute(
            'SELECT * FROM categoria WHERE ID_categoria=?',[num]);
    }

    update() {
        return db.execute(
            'UPDATE categoria SET  nombre_categoria = ?, tiempo_estimado = ? WHERE ID_categoria = ?', [this.nombre_categoria, this.tiempo_estimado, this.ID_categoria]);

    }
}
