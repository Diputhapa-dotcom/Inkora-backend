const { where } = require("sequelize");
const { blogs } = require("../../model")




exports.home = async (req,res) =>{
    const data = await blogs.findAll();
    res.send(data)

}







//get single blog
exports.singleBlogGet =async (req,res) =>{
   const {id} = req.params;
   const data = await blogs.findOne({
    where:{
        id:id
    }
   })
   
  res.send(data)

}