const{Products}=require('../../db')

module.exports=async(req,res)=>{
    const { name,  price,store,Categoria } = req.body;
    try{
        const product = await Products.create({  name,price,store,Categoria});
        res.status(201).json(product);
    }
    catch(error){   
    res.status(500).json({ error: error.message });
    }
}