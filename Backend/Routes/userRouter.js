const {Router}=require("express");
const { userSignup, userHi, userSignin, updateUser, bulkUsers } = require("../controller/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");



const userRouter=Router()


userRouter.post("/signup" ,userSignup);
userRouter.post("/signin" ,userSignin);
userRouter.put("/",authMiddleware,updateUser);
userRouter.get("/bulk",bulkUsers);



//this route is for testing
userRouter.get("/me",authMiddleware,userHi);


module.exports={
    userRouter
}