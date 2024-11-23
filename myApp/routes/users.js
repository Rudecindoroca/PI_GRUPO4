var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController');


/* GET users listing. */

/* crear sufijos Registro*/
router.get('/register', userController.register);




module.exports = router;
