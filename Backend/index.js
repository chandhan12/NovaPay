const express=require("express")
const mongoose=require("mongoose");
const dotenv=require("dotenv")

const UserModel=require('./models/userSchema.js')

dotenv.config();

mongoose.connect(process.env.MONGO_URL).
then(() =>{
    console.log('connected')
}).catch((error)=>{
    console.log(error.message)
})

const app=express();

app.get("/",(req,res) =>{
    res.json({
        msg:"hey"
    })
})


app.listen(3000,() =>{
console.log("server is started and running on port 3000 ...!")
})