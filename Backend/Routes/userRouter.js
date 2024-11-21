const {Router}=require("express");
const { userSignup, userHi } = require("../controller/userController");


const userRouter=Router()


userRouter.post("/user/signup" ,userSignup);



userRouter.get("/user/hi",userHi);


module.exports={
    userRouter
}