const mongoose = require("mongoose");
const { UserModel } = require("./userSchema");

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
});

const AccountModel = mongoose.model('Account', accountSchema);

module.exports = {
    AccountModel
};
