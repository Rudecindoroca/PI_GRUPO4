const db = require('../database/models');

const bcryptjs = require('bcryptjs');

const op = db.Sequelize.Op;

const userController = {
  register: (req, res)=>{
    return res.render("register")
},

registerPost: (req, res)=>{

  let form = req.body;

  form.contrasena = bcryptjs.hashSync(form.contrasena, 10);

 

  db.Users.create(form)
  .then(function (results) {

    return res.redirect("/users/login");

  })
  .catch(function (err) {
    return console.log(err);
    
  })

  
},

login: (req, res)=>{

  return res.render("login")
},

loginPost: function (req, res) {
  
},

store: function (req, res) {
  
  let form = req.body;

  db.Users.create(form)
  .then(function (results) {
    return res.send(results);
  })
  .catch(function (error) {
    return console.log(error);
  })

}

};

module.exports = userController;