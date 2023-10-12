const userModel  = require("../models/user.js")


exports.createUser   = async(req,res) =>{
    try{
    let {name, email, role} = req.body
     let userobj  ={
        name,
        email,
        role
     }

     let createduser = await  userModel.create(userobj);
     if(createduser){
        res.status(201).json({
            status:1,
            message: "User Created",
            data: createduser
        })
     }

    }
    catch(error){
        res.status(400).json({
            status: 0,
            message: error.message,
        })
    }
}


