const mongoose=require("mongoose");
const{Schema}=mongoose.Schema

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowerCase:true,
        minLength:3,
        maxLenght:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
        
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLenght:30,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLenght:30,
    },
   
});


const UserModel=mongoose.model('User',userSchema);



module.exports={
    UserModel
}