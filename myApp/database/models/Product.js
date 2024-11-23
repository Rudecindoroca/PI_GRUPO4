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
                model: 'Users', // nombre de la tabla relacionada
                key: 'id'       // primary key de esa tabla
            }
        },
        created_at: {
            type: datatype.DATE,
           
        },
        updated_at: {
            type: datatype.DATE,
        },
        deleted_at: {
            type: datatype.DATE,
        },
        

    }
    
    let config = {
        tableName: "products",     
        timestamps: false,
        underscored: true
    }
    
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.belongsTo(models.Users, { 
            as: "users", 
            foreignKey: "user_id",
        });
    };

   
    return Product;
}
