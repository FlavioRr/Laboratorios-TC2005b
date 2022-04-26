function authRole(role) {
    return (req, res, next) => {
        if (req.user.ID_rol !== role) {
            res.status(403)
            console.log('esta madre funciona')
        }
    }
}

module.exports = {
    authRole
}