const express = require('express');
const router = express.Router();

const AP = require('../controllers/controller_asigPrio');

router.get('/get_tic/:id', AP.get_tic);
router.post('/post_prio/:id', AP.post_prio);
 
router.get('/', AP.root);

module.exports = router;  