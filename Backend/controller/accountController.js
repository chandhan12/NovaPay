const {  mongoose } = require("mongoose");
const { AccountModel } = require("../models/accountSchema");

const balance = async (req, res) => {
    const userId = req.userId; 

    try {
        const account = await AccountModel.findOne({ userId });

        if (!account) {
            return res.status(404).json({ error: "Account not found" });
        }

        res.status(200).json({
            balance: account.balance,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const transferAmount=async (req,res) =>{
   try {
    
    const session = await mongoose.startSession();

    session.startTransaction();
    const{amount,to}=req.body;
    const userId=req.userId;

    const account=await AccountModel.findOne({
        userId
    }).session(session);
    if(account.balance<amount){
        return res.status(400).json({
            msg:"Insufficent funds"
        })
    }

    const toAccount=await AccountModel.findOne({
        userId:to
    }).session(session);

    if(!toAccount){
        return res.status(400).json({
            msg:"Invalid account"
        })
    }

    await AccountModel.updateOne({
        userId
    },{
        $inc:{
            balance:-amount
        }
    }).session(session);

    await AccountModel.updateOne({
        userId:to
    },{
        $inc:{
            balance:amount
        }
    }).session(session);


    session.commitTransaction();

    res.json({
        msg:"Transaction successfull"
    })
   } catch (error) {
    res.status(401).json({
        msg:error.message
    })
    
   }
}

module.exports = {
    balance,
    transferAmount
};
