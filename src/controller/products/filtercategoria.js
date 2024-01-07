const { Products } = require("../../db");

module.exports=async(req,res)=> {
    const {Categoria} = req.params.Categoria;
    if (!Categoria) {
      return res.status(500).json({ error: 'El parámetro Categoria es requerido' });
  }
   
    try{
        const filtrado = await Products.findAll({ where:
        {Categoria: Categoria}}); 
        conseole.log(filtrado);
        res.status(201).json(filtrado);
    }
    catch(error){  
    console.log(error)
    res.status(500).json({ error: error.message });
    }
}