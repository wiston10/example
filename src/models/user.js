const { DataTypes, Sequelize } = require('sequelize');
// const sequelize = require('../db');

module.exports = (sequelize) => {
    sequelize.define('Users',{
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      }, 
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
          
    },    
    {
       timestamps: false, // Desactivar las columnas createdAt y updatedAt
     })
  }