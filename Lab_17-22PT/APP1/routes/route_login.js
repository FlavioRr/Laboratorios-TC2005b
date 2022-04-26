const express = require('express');
const router = express.Router();

const clogin = require('../controllers/controller_login');
const isAuth = require('../util/is-auth.js');

router.get('/login',  clogin.get_login);
router.get('/loginw',  clogin.get_login2);
router.post('/login', clogin.login);
router.get('/logout', clogin.logout);
router.get('/signup',  clogin.get_signup);
router.post('/signup', clogin.post_signup);
router.get('/tickets', isAuth, clogin.get_ticketspropios);
router.post('/tickets', clogin.borrarpropios);
router.get('/', clogin.root);

module.exports = router;
