const{Users}=require('../../db')

module.exports=async(req,res)=>{
    const { name, password } = req.body;
    try{
        const datauser = await Users.create({  name,password});
        res.status(201).json(datauser);
    }
    catch(error){   
    res.status(500).json({ error: error.message });
    }
}