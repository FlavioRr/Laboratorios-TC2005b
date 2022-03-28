const db = require('../util/database');

module.exports = class Capybara {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nueva_descripcion, nueva_imagen, nuevo_duenio_id) {
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
        this.duenio_id = nuevo_duenio_id;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO capybaras (nombre, descripcion, imagen, duenio_id) VALUES (?, ?, ?, ?)', 
            [this.nombre, this.descripcion, this.imagen, this.duenio_id]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute(
            'SELECT c.nombre, descripcion, imagen, duenio_id, c.created_at, u.nombre as duenio FROM capybaras c, usuarios u WHERE c.duenio_id = u.username');
    }

    static fetchOne(capybara_id) {
        return db.execute('SELECT c.nombre, descripcion, imagen, duenio_id, c.created_at, u.nombre as duenio FROM capybaras c, usuarios u WHERE c.duenio_id = u.username AND id=?', [capybara_id]);
    }

}