const express = require('express');
const router = express.Router();
const cgenticket = require('../controllers/controller_GenTem');

router.get('/gen_template', cgenticket.get_gentem);
router.post('/enviar_template', cgenticket.post_gentem);
router.get('/', cgenticket.root); 

module.exports = router;
