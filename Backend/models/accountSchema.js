const monggose=require("mongoose");
const { UserModel } = require("./userSchema");

const Schema=mongoose.Schema;


const accountSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:UserModel,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

const AccountModel=monggose.model('Account',accountSchema);


module.exports={
    AccountModel
}