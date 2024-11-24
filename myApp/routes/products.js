var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();

/* GET home page. */

router.get('/detail/:id',productsController.detalle);

router.get('/busqueda',productsController.busqueda);


module.exports = router;