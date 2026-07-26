const { where } = require("sequelize");
const { profiles, users } = require("../../model");


//User Bio section
exports.profileGet = async (req,res)=>{
   const userid = req.userId;
  const profile = await profiles.findOne({
    where:{
        userid : userid
    },
    include:{
        model:users,
        attributes:["username"]
    }
   })
   res.send(profile)
}


exports.profilePost = async (req,res) =>{
    const userid = req.userId;
    const {bio,image} = req.body;
   await profiles.create({
    bio,
    image,  
    userId : userid
   })
    res.send("lksajfk")

}