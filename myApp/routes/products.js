var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();

/* GET home page. */

router.get('/detail/:id',productsController.detalle);

router.get('/busqueda',productsController.busqueda);

router.get('/create',productsController.create); 

router.post('/create',productsController.store);


module.exports = router;