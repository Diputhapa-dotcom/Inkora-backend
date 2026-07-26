const { blogs } = require("../../model");









exports.addBlog = async (req,res) =>{
    const userid = req.userId;
    console.log("aaxa hai",userid)
    const {title,subtitle,description,image} = req.body;    
    if(!title || !subtitle || !description ){
        return res.json({
            message:"provide the given requirement first"
        })
    }
    await blogs.create({
        title,
        subtitle,
        image,
        description,
        userId : userid

    })
    res.json({
        message:"la thik xa"
    })
    

}


//add blog samma vaye aabo home ko banauna xa

