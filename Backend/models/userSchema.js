const mongoose=require("mongoose");
const{Schema}=mongoose.Schema

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        lowerCase:true,
        minLength:3,
        maxLenght:30
    },
    password:{
        type:String,
        require:true,
        minLength:6
        
    },
    firstName:{
        type:String,
        require:true,
        trim:true,
        maxLenght:30,
    },
    lastName:{
        type:String,
        require:true,
        trim:true,
        maxLenght:30,
    },
   
});


const UserModel=mongoose.model('User',userSchema);



module.exports={
    UserModel
}