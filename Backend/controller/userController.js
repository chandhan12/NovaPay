const {UserModel,name}=require('../models/userSchema.js')

const userSignup=async (req,res) =>{

    const {userName,password,firstName,lastName}=req.body;
try {
    
    const success=await UserModel.create({
        userName,
        password,
        firstName,
        lastName
    })

    if(success){
        res.json({
            msg:"your are signedup"
        })
    }
    
} catch (error) {

    res.json({
        msg:error.message
    })
    
}



}


const userHi=(req,res) =>{
    res.json({
        msg:"hey bro"
    })
}


module.exports={
    userHi,
    userSignup
}