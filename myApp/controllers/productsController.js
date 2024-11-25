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
    return res.render("product-add");
  },
  
  store:function (req,res) {

    let productoCreado = req.body;
   
    productoCreado.user_id = req.session.userlogeado.id;
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





