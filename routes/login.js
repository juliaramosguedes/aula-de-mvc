const express = require('express');
const router = express.Router();
const controller = require('../controllers/login');

/* GET login index. */
router.get('/', controller.index);

// GET login cadastro
router.get('/cadastro', controller.cadastro)

// POST login cadastro
router.post('/cadastro', controller.novoCadastro)

module.exports = router;
