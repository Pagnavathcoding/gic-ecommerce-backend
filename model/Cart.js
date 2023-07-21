const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    size: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: String,
        default: Date.now(),
    }
})

module.exports = mongoose.model("Cart", CartSchema);