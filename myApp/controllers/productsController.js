const db = require('../database/models');

const productsController = {
  detalle: function (req, res) {
    let id = req.params.id;

    return res.send(id)

    let filtrado = {
      include: [
        { association: "user" } // Asegúrate de que esta asociación esté configurada en el modelo
      ]
    };

    db.Product.findByPk(id, filtrado)
      .then(function (result) {

        
        return res.render("detalleProduct", { producto: result, titulo: 'Detalle Producto' });
      })
      .catch(function (err) {
        console.log(err);
        return res.status(500).send('Error en el servidor');
      });
  },
};

module.exports = productsController;




