const { UserModel } = require('../models/userSchema.js');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");
const { AccountModel } = require('../models/accountSchema.js');

const userSignup = async (req, res) => {
    const requireBody = zod.object({
        userName: zod.string().email(),
        password: zod.string().min(6, "Password must be at least 6 characters long"),
        firstName: zod.string(),
        lastName: zod.string()
    });

    try {
        
        const parseResult = requireBody.safeParse(req.body);
        if (!parseResult.success) {
            return res.status(400).json({
                message: "Invalid inputs",
                errors: parseResult.error.errors
            });
        }

        const { userName, password, firstName, lastName } = parseResult.data;

        
        const existingUser = await UserModel.findOne({ userName });
        if (existingUser) {
            return res.status(409).json({ message: "Username already taken" });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);

       
        const user = await UserModel.create({
            userName,
            password: hashedPassword,
            firstName,
            lastName
        });

        const userId = user._id;

        await AccountModel.create({
            userId,
            balance:1+Math.random()*10000
        })

        
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return res.status(201).json({
            message: "User created successfully",
            token: token
        });

    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message
        });
    }
};


const userSignin=async (req,res) =>{

    const{userName,password}=req.body;

try {
    
    
    const user=await UserModel.findOne({
        userName,
    })

    if(!user){
        res.status(403).json({
            message:"user does not exit..!"
        })
    }

    const passwordMatched=await bcrypt.compare(password,user.password)

    if(passwordMatched){

        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET);

        res.json({
            token:token
        })
    }
    else{
        res.status(400).json({
            msg:"Invalid credentials"
        })
    }

    
} catch (error) {

    res.status(500).json({
        message:error.message
    })
    
}

}


const updateUser=async (req,res)=>{

    const requireBody=zod.object({
        password:zod.string().min(6,"password must be greater than 6 "),
        firstName:zod.string(),
        lastName:zod.string()
    })

    const parseResult=requireBody.safeParse(req.body);


    if(!parseResult.success){

        res.status(411).json({
            msg:"error while updating"
        })
    }

    const {password,firstName,lastName}=parseResult.data

    const hashedPassword=await bcrypt.hash(password,10)

   try {
    await UserModel.updateOne({_id:req.userId},{
        password:hashedPassword,
        firstName:firstName,
        lastName:lastName

    })

    res.status(200).json({
        msg:"user updated successfully"

    })
   } catch (error) {

    res.status(411).json({
        msg:"error while updating",
        error:error.message
    })
    
   }
    

}

const bulkUsers=async (req,res) =>{

    const filter=req.query.filter || ""

    try {
        const users=await UserModel.find({
            $or:[{
                firstName:{
                    $regex:filter
                }
            },
            {
                lastName:{
                    $regex:filter
                }
            }
        ]
        })
    
        res.status(200).json({
            user:users.map((eachUser) =>{
                return({
                    userName:eachUser.userName,
                    userName:eachUser.userName,
                    lastName:eachUser.lastName,
                    _id:eachUser._id
    
                }
                )
            })
        })
    
    } catch (error) {
        res.status(400).json({
            msg:"something went wrong",
            error:error.message
        })
        
    }

}




const userHi =async (req, res) => {

    const user=await UserModel.findById({
        _id:req.userId
    })
    res.json({ name: user.userName,
        id:user._id
     });
};

module.exports = {
    userHi,
    userSignup,
    userSignin,
    updateUser,
    bulkUsers
};
