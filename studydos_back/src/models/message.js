const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    author: {
        type: String,
        enum: ['user', 'AI'],  // Only 'user' or 'AI' allowed
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now  // Automatically assigns the current timestamp
    }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;