const express = require('express')

const checkLogin = require('../middleware/checkLogin.js')
const {
    addToCart,
    getCart,
    removeFromCart,
    increaseQuantityInCart,
} = require('../controller/cartController.js')

const router = express.Router()

//them vao gio hang
router.post('/', checkLogin, addToCart)

//lay ra gio hang
router.get('/', checkLogin, getCart)

//giảm 1 san pham tron gio hang
router.put('/decrease/:productId', checkLogin, removeFromCart)

//tăng 1 san pham tron gio hang
router.put('/increase/:productId', checkLogin, increaseQuantityInCart)

module.exports = router
