const {Router}=require("express");
const { userSignup, userHi, userSignin } = require("../controller/userController");


const userRouter=Router()


userRouter.post("/signup" ,userSignup);
userRouter.post("/signin" ,userSignin);



userRouter.get("/hi",userHi);


module.exports={
    userRouter
}