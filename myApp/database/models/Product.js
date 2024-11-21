module.exports = function(sequelize, datatype) {

    let alias = "Product";            
    let cols = {
        id: { 
            autoIncrement: true,
            primaryKey: true,
            type: datatype.INTEGER
        },
        imagen: {
            type: datatype.STRING(255),
            allowNull: false
        },
        nombre_producto: {
            type: datatype.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: datatype.TEXT,
            allowNull: false
        },
        user_id: {
            type: datatype.INTEGER,
            references: {
                model: 'Users', // name of the related table
                key: 'id'       // key in the Users table to reference
            }
        }
    }
    
    let config = {
        tableName: "products",     
        timestamps: false,
        underscored: true
    }
    
    const Product = sequelize.define(alias, cols, config); 

   
    return Product;
}
