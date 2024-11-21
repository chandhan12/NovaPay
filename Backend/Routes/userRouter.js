const {Router}=require("express");
const { userSignup, userHi, userSignin } = require("../controller/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");



const userRouter=Router()


userRouter.post("/signup" ,userSignup);
userRouter.post("/signin" ,userSignin);



userRouter.get("/me",authMiddleware,userHi);


module.exports={
    userRouter
}