const express = require('express');
const router = express.Router();

const PPController = require('../controllers/controller_pp');
const isAuth = require('../util/is-auth.js');

router.get('/', isAuth, PPController.get_principal);
router.post('/', PPController.post_principal);
// router.get('/', PPController.get_mistickets);


module.exports = router;