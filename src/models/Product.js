const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

module.exports = (sequelize) => {
  sequelize.define('Products',{
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }, 
    name: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    photo:{
      type:DataTypes.STRING,
      defaultValue:'',
    },
    store:{
      type:DataTypes.INTEGER,
      defaultValue:0,
      
    },
    Categoria:{ 
      type:DataTypes.STRING,
      defaultValue:'otros',
    }
  },    
  {
     timestamps: false, // Desactivar las columnas createdAt y updatedAt
   })
}



