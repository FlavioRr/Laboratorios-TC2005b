const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js');

const userController = require('../controllers/user_controller');

router.get('/login', userController.get_login);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/signup', isAuth, userController.get_signup);
router.post('/signup', userController.post_signup);
router.get('/', isAuth, userController.root);

module.exports = router;