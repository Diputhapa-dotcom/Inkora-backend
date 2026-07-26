const { users } = require("../../model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')



exports.loginPost = async (req,res) => {
    
const { email, password } = req.body;
if( !email || !password ){
return res.status(400).json({
    message : "Please enter email and password"
})
}

const loginData = await users.findOne({
    where : {
        email
    }
})
if( !loginData ){
    return res.status(404).json({
        message : "No email with that user"
    })
}
if( loginData ){
const isPassword = bcrypt.compareSync( password,loginData.password )

if(isPassword){
   const token = jwt.sign({ id : loginData.id }, process.env.tokenPass , { expiresIn : '1d' });
   res.cookie("token",token);
   res.status(200).json({
       message : "Logged in successfully"
    
   })
}else{
    return res.status(401).json({
        message : 'Invalid password'
    })
}
}
}