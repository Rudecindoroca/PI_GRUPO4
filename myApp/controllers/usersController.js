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

  let form = req.body;

  let filtrado = {
    where: {email: form.email}
  }

  db.Users.findOne(filtrado)
  .then(function (results) {

    if (!results) {
      return res.send("Usuario no encontrado");
    } else {
      let check = bcryptjs.compareSync(form.contrasena, results.contrasena);
      if (check) {
        return res.send("Usuario logueado");  
      } else {
        return res.send("Contraseña incorrecta");
      }
    }

  })
  .catch(function (error) {
    return console.log(error); ;
  })

  

  //return res.redirect("/")
},

};

module.exports = userController;