const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true, 
        minlength: 3, 
        maxlength: 30, 
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30, 
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30, 
    },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    UserModel
};
