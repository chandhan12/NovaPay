
const jwt=require("jsonwebtoken")


const authMiddleware=(req,res,next) =>{

    const authHead=req.headers.authorization

    if(!authHead){

        res.status(401).json({
            msg:"token not found"
        })
    }

    const token=authHead.split(' ')[1]
    
    try {
        
    const decodedUser=jwt.verify(token,process.env.JWT_SECRET);

        req.userId=decodedUser.userId

        next();
    } catch (error) {

        res.status(401).json({
            msg:"unauthorized",
            error:error.message
        })
        
    }

}

module.exports={
    authMiddleware
}