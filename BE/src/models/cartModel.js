// models/cart.js
const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clothes', // Tham chiếu đến mô hình sản phẩm
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    },
    size: {
        type: Array,
    },
    color: {
        type: Array,
    },
    img: {
        type: String,
    },
})

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Tham chiếu đến mô hình người dùng
    },
    items: [cartItemSchema],
    total: Number,
})

module.exports = mongoose.model('Cart', cartSchema)
