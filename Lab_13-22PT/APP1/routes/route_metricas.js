const express = require('express');
const router = express.Router();

const metricas = require('../controllers/controller_metricas');
const isAuth = require('../util/is-auth.js');

router.get('/', isAuth, metricas.getmetricas);

module.exports = router;