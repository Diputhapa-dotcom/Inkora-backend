const jwt = require('jsonwebtoken')
const promisify = require('util').promisify;

exports.isAuthentication = async (req,res,next) =>{
    console.log(req.cookies.token)
    const {token} = req.cookies;
    if(!token || token === null || token ===undefined){
        return res.status(401).json({
            message : 'please login first'
        })
    }

    const verify = await promisify(jwt.verify)(token,process.env.tokenPass)
    req.userId = verify.id;
    next()


}