const express = require('express');
const router = express.Router();

const capybarasController = require('../controllers/capybaras_controller');

router.get('/cerveza', capybarasController.cerveza);
router.get('/nuevo', capybarasController.get_nuevo);
router.post('/nuevo', capybarasController.post_nuevo);
router.use('/', capybarasController.listar);

module.exports = router;