const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
});


module.exports = mongoose.model("User", UserSchema);
