const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(ID_rol, nombre, apellido_paterno, apellido_materno, correo, password) {
        this.ID_rol = ID_rol;
        this.nombre = nombre;
        this.apellido_paterno = apellido_paterno;
        this.apellido_materno = apellido_materno;
        this.correo = correo;
        this.password = password;
    }

    //Como solo se quieren obtener los datos no se incluye un metodo save().
    save() {
        return bcrypt.hash(this.password, 12)
            .then((password_cifrado) => {
                return db.execute(
                    'INSERT INTO usuario(ID_rol, nombre, apellido_paterno, apellido_materno, correo, password) VALUES(?,?,?,?,?,?)', [this.ID_rol, this.nombre, this.apellido_paterno, this.apellido_materno, this.correo, password_cifrado]);
            }).catch((error) => {
                console.log(error);
            });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static findOne(name) {
        return db.execute('SELECT * FROM usuario WHERE correo=?', [name]);
    }
    static fetchAll() {
        return db.execute('SELECT ID_usuario, nombre, apellido_paterno,apellido_materno,correo, nombre_rol FROM usuario');
    }
}