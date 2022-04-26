const express = require('express');
const router = express.Router();

const MTem = require('../controllers/controller_ModTem');
const isAuth = require('../util/is-auth.js');
const {authPage} = require('../util/rbac.js');

router.get('/get_template', isAuth, authPage(['1']), MTem.get_ticket);
router.get('/get_preg/:id', isAuth, authPage(['1']), MTem.get_preguntas);
router.post('/camb_cat/:id', MTem.post_mod);
// router.post('/n_preg/:id', MTem.post_npreg);
// router.post('/de_preg/:id', MTem.delete_preguntas);
router.get('/', isAuth, authPage(['1']), MTem.root);

module.exports = router; 