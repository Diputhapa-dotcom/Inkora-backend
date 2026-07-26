const { where } = require("sequelize");
const {  users } = require("../../model");
const bcrypt = require('bcrypt');



exports.registerPost = async (req,res) => {
const { username, email, password } = req.body;
if( !username, !email, !password ){
    return res.status(404).json({
        message:"please provide username , email & password"
    })
} 

   const registerData = await users.findAll({
    where:{
        email,
    }
    })
    if(registerData.length>0){
        return res.json({
            message:"Already register email"
        })
    }
    await users.create({
        username,
        email,
        password : bcrypt.hashSync(password,10)

    })
    return res.status(201).json({
        message:"User register successfully"
    })

}