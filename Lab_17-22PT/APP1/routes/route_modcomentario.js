const express = require('express');
const router = express.Router();

const comentariocont = require('../controllers/controller_modcomentario');

router.get('/get_comentario/:id', comentariocont.get_comentario);
router.post('/post_comentario/:id', comentariocont.post_comentario);

router.get('/', comentariocont.root);


// router
// .route('/get_comentario/:id')
// .get(comentariocont.get_comentario)
// .post(comentariocont.post_comentario)
module.exports = router;