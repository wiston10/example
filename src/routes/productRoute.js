const {postProduct,filtrado} =require('../controller/products/index');

const productRoute=require('express').Router();
productRoute
    .post('/',postProduct)
    .get('/filter',filtrado)

 module.exports=productRoute;   