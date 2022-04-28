const authPage  = (permisos) => {
    return (request, response, next) => {
        const rol_usuario = request.cookies.rolusuario;
        console.log(permisos);
        console.log(rol_usuario);
        if (permisos.includes(rol_usuario)){
            next();
        } else {
            return response.status(401).json("No tienes permiso.");
        }
    };
};

module.exports = {authPage};
