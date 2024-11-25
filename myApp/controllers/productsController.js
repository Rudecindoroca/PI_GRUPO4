const db = require('../database/models');

const op = db.Sequelize.Op;

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
  }

  
};

module.exports = productsController;





