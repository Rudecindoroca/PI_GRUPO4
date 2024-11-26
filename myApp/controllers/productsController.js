const db = require('../database/models');

const op = db.Sequelize.Op;
const bcryptjs = require('bcryptjs');

const productsController = {
  detalle: function (req, res) {

    
    let id = req.params.id;

    let filtrado = {
      include: {
        all: true,
        nested: true
      }
    }



    db.Product.findByPk(id, filtrado)
      .then(function (result ) {

        
        return res.render("product", { producto: result, titulo: 'Detalle Producto' });
      })
      .catch(function (err) {
        console.log(err);
        return res.status(500).send('Error en el servidor');
      });
  },

  busqueda: function (req, res) {
    
    let qs = req.query.search;

    let filtrado = {
      where: [{nombre_producto: {[op.like]: `%${qs}%`}}]
    }

    db.Product.findAll(filtrado)
    .then(function (results) {
      return res.render("search-results", {productos: results});
    })
    .catch(function (error) {
      return console.log(error);
    })
  },

  create: function (req, res) {
    
    if (req.session.userlogeado === undefined) {
      return res.redirect('/'); // Redirige a la página principal si no está logueado
    }
    return res.render("product-add");
  },
  
  store:function (req,res) {

    if (req.session.userlogeado === undefined) {
      return res.redirect('/'); // Redirige a la página principal si no está logueado
    }

    let productoCreado = req.body;

    productoCreado.user_id = req.session.userlogeado.id;

    // Validación de campos vacíos
    if (productoCreado.imagen === "") {
        return res.send("Debe insertar imagen");
    } else if (productoCreado.producto === "") {
        return res.send("Debe insertar el nombre del producto agregado");
    } else if (productoCreado.descripcion === "") {
        return res.send("Debe agregar una descripción sobre el producto agregado");
    }

    db.Product.create(productoCreado)
    .then(function (results) {
        return res.redirect("/");
    })
    .catch(function (error) {
      console.log(error);
      
    })
  },

 

};

module.exports = productsController;





