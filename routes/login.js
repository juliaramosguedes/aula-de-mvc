const express = require('express');
const router = express.Router();
const controller = require('../controllers/login');

// GET login index (view)
router.get('/', controller.index);

// POST login/entrar (recebe formulário)
router.post('/entrar', controller.entrar);

// GET login/cadastro (view)
router.get('/cadastro', controller.cadastro);

// POST login/cadastro (recebe formulário)
router.post('/cadastro', controller.novoCadastro);

module.exports = router;
