const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    resume_link: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required:true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserSchema);
