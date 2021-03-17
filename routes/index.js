const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

/* GET home page. */
router.get('/', controller.index);

router.get('/ola/:nome', controller.ola);

module.exports = router;
