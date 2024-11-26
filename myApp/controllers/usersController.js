const db = require('../database/models');

const bcryptjs = require('bcryptjs');

const op = db.Sequelize.Op;

const userController = {
  register: (req, res)=>{
    return res.render("register")
},

registerPost: (req, res)=>{

  let form = req.body;

  if (!form.email || form.email.trim() === "") {
    return res.send("Ingrese su email");
  } else if (!form.usuario || form.usuario.trim() === "") {
    return res.send("Ingrese un nombre");
  } else if (!form.contrasena || form.contrasena.trim() === "") {
    return res.send("Ingrese la contraseña");
  }

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

  // Verifica si el usuario ya está logueado
  if (req.session.userlogeado !== undefined) {
    return res.redirect('/'); // Redirige a la página principal si ya está logueado
  }

  return res.render("login") // Muestra la vista de login si no está logueado
},

loginPost :(req, res) => {

  // Verifica si el usuario ya está logueado
  if (req.session.userlogeado !== undefined) {
    return res.redirect('/'); // Redirige a la página principal si ya está logueado
  }

  let form = req.body;
   // Validación de campos vacíos
   if (!req.body || !req.body.email || !req.body.contrasena) {
    return res.send("Todos los campos son obligatorios");
  }
  let filtro = {
    where:{email: form.email}
  }

  db.Users.findOne(filtro)
  
  .then(function (results) {
    if(!results){
    return res.send("Este email no se encuentra");
  } if (results){
    let data = bcryptjs.compareSync(form.contrasena, results.contrasena);
    if(data){
        req.session.userlogeado = results.dataValues;
        return res.redirect("/")
    }else{
        return res.send("La contraseña es incorrecta");
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