module.exports = function(sequelize, datatype) {

    let alias = "User";            
    let cols = {
        id: { 
            autoIncrement: true,
            primaryKey: true,
            type: datatype.INTEGER
        },
        email: {
            type: datatype.STRING(255),
            allowNull: false,
            unique: true
        },
        usuario: {
            type: datatype.STRING(100),
            allowNull: false
        },
        contrasena: {
            type: datatype.STRING(255),
            allowNull: false
        }
    }
    
    let config = {
        tableName: "users",     
        timestamps: false,
        underscored: true
    }
    
    const User = sequelize.define(alias, cols, config); 
    return User;
}