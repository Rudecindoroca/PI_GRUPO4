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

loginPost :(req, res) => {
  let form = req.body;
  let filtro = {
    where:{email: form.email}
  }

  db.Users.findOne(filtro)
  .then(function (results) {
    if (!results) {

      return res.send("no hay mail")
      
    } else {

      let check = bcryptjs.compareSync(form.contrasena, results.contrasena)
      if (check) {

        req.session.userlogeado = results.dataValues;

        return res.redirect("/")
        
      } else {

        return res.send("la contrasena esta mal")
        
      }
      
    }

  }).catch(function (err) {
    return console.log(err);
    
  })
},
logout: function (req,res) {

  req.session.destroy();

  return res.redirect("/")

  
}


}

module.exports = userController;