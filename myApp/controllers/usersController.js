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

loginPost: (req, res) => {
  let form = req.body;
  let filtro = {
      where: {email: form.email}
  }
  db.User.findOne(filtro)
  .then((result) => {

      if (!result) {
          return res.send("No hay mail")
      } else {
          let check = bcryptjs.compareSync(form.contrasena , result.contrasena)
          if (check) {
              req.session.user = result.dataValues;
              return res.redirect("/");
          } else {
              return res.send("La contraseña es incorrecta");
          }
      }

  }).catch((err) => {
      return console.log(err);
      
  });

};

module.exports = userController;