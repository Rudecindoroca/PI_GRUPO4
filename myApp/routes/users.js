var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController');


/* GET users listing. */

/* crear sufijos Registro*/
router.get('/register', userController.register);

router.get('/login', userController.login);



router.post('/register', userController.registerPost);

router.post('/login', userController.store);



module.exports = router;
