const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema

const usersSchema = new Schema({
    firstName: {type: String, max:100},
    middleName: {type: String, max:100},
    lastName: {type: String, max:100},
    email: {
        type: String,
        unique: [true, "Email id already present"],
        required: "Email is require."
    },
    password:{type: String, max:100},
    confirmPassword:{type: String, max:100},
    profilePhoto: {
        data: Buffer,
        contentType: String
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    lastModifiedOn: {
        type: Date,
        default: Date.now
    },
    designation: String,
});

const User = mongoose.model('User', usersSchema);
module.exports = User;