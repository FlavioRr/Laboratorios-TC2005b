const express = require('express');
const router = express.Router();
const cgenticket = require('../controllers/controller_GenT');
const isAuth = require('../util/is-auth.js');

router.get('/enviar_ticket', isAuth, cgenticket.get_genticket);
router.get('/categoria/:id/:nombre', isAuth, cgenticket.get_preguntas);
router.post('/categoria/:id/:nombre', cgenticket.post_genticket);
router.get('/', isAuth, cgenticket.root); 

module.exports = router;
