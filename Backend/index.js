const express=require("express")
const mongoose=require("mongoose");
const dotenv=require("dotenv")
const cors=require('cors')

const UserModel=require('./models/userSchema.js');
const { userRouter } = require("./Routes/userRouter.js");
const { accountRouter } = require("./Routes/accountRouter.js");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).
then(() =>{
    console.log('connected')
}).
catch((error)=>{
    console.log(error.message)
})

const app=express();

app.use(cors())

app.use(express.json());

app.use('/api/v1/user',userRouter);
app.use('/api/account',accountRouter);



app.get("/",(req,res) =>{
    res.json({
        msg:"hey"
    })
})


app.listen(3000,() =>{
console.log("server is started and running on port 3000 ...!")
})