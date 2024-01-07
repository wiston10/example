const { Sequelize ,DataTypes} = require('sequelize');
 
const MODELS = require('./models/index');
const sequelize = new Sequelize('POS', 'root',  '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306, // Puerto predeterminado de MySQL
});

// DEFINE MODELS
for (const key in MODELS) {  //eslint-disable-line
 
  MODELS[key](sequelize);
}
 

const {
 
  Products,
  
} = sequelize.models;

 



module.exports = {
  ...sequelize.models,
  db: sequelize,
};