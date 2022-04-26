const db = require('../util/database');

module.exports = class Pregunta {
    constructor(texto_pregunta, ID_categoria, ID_pregunta) {
        this.texto_pregunta = texto_pregunta;
        this.ID_categoria = ID_categoria;
        this.ID_pregunta = ID_pregunta;

    }

    // constructor(ID_pregunta, ID_categoria, texto_pregunta) {
    //     this.ID_pregunta = ID_pregunta;
    //     this.ID_categoria = ID_categoria;
    //     this.texto_pregunta = texto_pregunta;
    //  }

    static fetchPreguntas(id) {
        return db.execute(
            'SELECT * FROM pregunta WHERE ID_categoria=?', [id]);
    }

    static idpreg(id) {
        return db.execute(
            'SELECT ID_pregunta FROM pregunta WHERE ID_categoria=?', [id]);
    }

    static countpreg(id) {
        return db.execute(
            'SELECT COUNT(*) FROM pregunta WHERE ID_categoria = ?', [id]);
    }
    update() {
            return db.execute(
                'UPDATE pregunta SET texto_pregunta = ? WHERE ID_categoria = ? AND ID_pregunta = ?', [this.texto_pregunta, this.ID_categoria, this.ID_pregunta]);
        }
    delete(id1, id2){
            return db.execute(
                'UPDATE pregunta SET disponible = 0 WHERE ID_categoria = ? AND ID_pregunta = ?', [id1, id2]);
    }
        // delete(id){
        //     return db.execute(
        //         'DELETE FROM pregunta WHERE  ID_categoria=?', [id]);
        // }
        // addpreg(){
        //     return db.execute(
        //         'INSERT INTO pregunta(texto_pregunta, ID_categoria) VALUES(?, ?) WHERE ID_categoria = ?', [this.texto_pregunta, this.ID_categoria])
        // }
}