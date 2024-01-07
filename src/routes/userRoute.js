const {postuser} =require('../controller/Users/index');


const userRoute=require('express').Router();
userRoute
    .post('/',postuser)

 module.exports=userRoute;   