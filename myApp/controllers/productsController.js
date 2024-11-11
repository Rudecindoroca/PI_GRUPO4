const db = require('../database/models');
const op = db.Sequelize.Op;

const productsController = {
  detalle: function (req, res) {

    db.Product.findAll()
    .then( function (result) {


      return res.send(results)

      return res.render("index", {listaProductos: result })
      
    })
    .catch( function (err) {

      return console.log(err); 
    });


  },


}


module.exports = productsController ;
