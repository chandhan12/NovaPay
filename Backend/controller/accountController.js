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
    const{amount,to}=req.body;
    const userId=req.userId;

    const account=await AccountModel.findOne({
        userId
    })
    if(account.balance<amount){
        return res.status(400).json({
            msg:"Insufficent funds"
        })
    }

    const toAccount=await AccountModel.findOne({
        userId:to
    })

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
    })

    await AccountModel.updateOne({
        userId:to
    },{
        $inc:{
            balance:amount
        }
    })

    res.json({
        msg:"Transaction successfull"
    })
}

module.exports = {
    balance,
    transferAmount
};
