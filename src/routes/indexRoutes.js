const indexRoutes = require('express').Router();
//import diferent
  const productRoute= require('./productRoute');
  const userRoute =require('./userRoute') ;
 
//images

indexRoutes
   .use('/products', productRoute)
   .use('/users', userRoute);
 
// .use('/menu', menuRouter);

indexRoutes.get('/', (req, res) => {
  res.send('Hello World!');
});
module.exports = indexRoutes;