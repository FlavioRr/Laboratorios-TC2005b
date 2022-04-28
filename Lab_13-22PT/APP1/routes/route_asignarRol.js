const express = require('express');
const router = express.Router();

const AR = require('../controllers/controller_asigRol');

router.get('/get_usuario/:id', AR.get_usuario);
router.post('/post_rol/:id', AR.post_rol);

router.get('/', AR.root);

module.exports = router;  
