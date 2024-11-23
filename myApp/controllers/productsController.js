const db = require('../database/models');


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
  
};

module.exports = productsController;





