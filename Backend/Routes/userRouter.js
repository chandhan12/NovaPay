const {Router}=require("express");
const { userSignup, userHi, userSignin, updateUser } = require("../controller/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");



const userRouter=Router()


userRouter.post("/signup" ,userSignup);
userRouter.post("/signin" ,userSignin);
userRouter.put("/",authMiddleware,updateUser);



userRouter.get("/me",authMiddleware,userHi);


module.exports={
    userRouter
}