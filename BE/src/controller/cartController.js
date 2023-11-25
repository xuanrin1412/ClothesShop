const CartModel = require('../models/cartModel.js')
const ClothesModel = require('../models/clothesModel.js')

// =====ADD TO CART ========================
const addToCart = async (req, res) => {
    try {
        const { productId, quantity, color, size, img } = req.body
        const userId = req.user.id
        console.log('userId', userId)

        // Kiểm tra giỏ hàng của người dùng đã tồn tại chưa
        let userCart = await CartModel.findOne({ user: userId })
            .populate('user')
            .populate('items.product')
            .exec()

        if (!userCart) {
            // Nếu giỏ hàng chưa tồn tại, tạo mới giỏ hàng
            userCart = new CartModel({ user: userId, items: [] })
        }

        // Lấy thông tin sản phẩm từ ID
        const product = await ClothesModel.findById(productId)

        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingCartItem = userCart.items.find(
            item => item.product._id.toString() === productId.toString(),
        )

        if (existingCartItem) {
            // Nếu sản phẩm đã tồn tại, cập nhật số lượng
            existingCartItem.quantity += quantity
            existingCartItem.price = product.price // Cập nhật giá sản phẩm
            existingCartItem.color = color // Thêm thông tin màu vào giỏ hàng
            existingCartItem.size = size // Thêm thông tin kích thước vào giỏ hàng
            existingCartItem.img = img
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
            userCart.items.push({
                product: product, // Thêm toàn bộ thông tin sản phẩm vào giỏ hàng
                quantity: quantity,
                price: product.price,
                color: color, // Thêm thông tin màu vào giỏ hàng
                size: size, // Thêm thông tin kích thước vào giỏ hàng
                img: img, //
            })
        }

        // Lưu giỏ hàng
        await userCart.save()

        // Lấy giỏ hàng sau khi cập nhật
        const updatedCart = await CartModel.findOne({ user: userId })

        if (!updatedCart) {
            return res.status(404).json({ message: 'Cart not found' })
        }

        // Tính toán tổng tiền và số lượng
        const total = updatedCart.items
            ? updatedCart.items.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0,
              )
            : 0
        const quantityInCart = updatedCart.items
            ? updatedCart.items.reduce((acc, item) => acc + item.quantity, 0)
            : 0

        res.json({
            cart: updatedCart,
            quantity: quantityInCart,
            total: total,
            userValue: req.user,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error', error })
    }
}

// =====GET ALL========================
const getCart = async (req, res) => {
    try {
        const userId = req.user.id

        // Lấy giỏ hàng của người dùng
        const userCart = await CartModel.findOne({ user: userId })
            .populate('user')
            .populate('items.product')
            .exec()

        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' })
        }

        // Tính toán tổng tiền và số lượng
        const total = userCart.items
            ? userCart.items.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0,
              )
            : 0

        const quantityInCart = userCart.items
            ? userCart.items.reduce((acc, item) => acc + item.quantity, 0)
            : 0

        res.json({
            cart: userCart,
            quantity: quantityInCart,
            total: total,
            userValue: req.user,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error', error })
    }
}

//=========DELETE ONE PRODUCT==========
const removeFromCart = async (req, res) => {
    try {
        const userId = req.user.id
        const productId = req.params.productId
        console.log('userId', req.user)

        // Lấy giỏ hàng của người dùng
        let userCart = await CartModel.findOne({ user: userId })
            .populate('user')
            .populate('items.product')
            .exec()
        console.log('userCart', userCart)

        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' })
        }
        console.log('productId', productId)

        // Kiểm tra sự tồn tại của sản phẩm trong giỏ hàng
        const existingCartItem = userCart.items.find(
            item => item.product._id == productId,
        )
        console.log('userCart.items', userCart.items)

        if (!existingCartItem) {
            return res
                .status(404)
                .json({ message: 'Product not found in cart' })
        }

        // Giảm số lượng sản phẩm
        if (existingCartItem.quantity > 1) {
            existingCartItem.quantity -= 1
        } else {
            // Nếu số lượng là 1, xóa sản phẩm khỏi giỏ hàng
            userCart.items.splice(userCart.items.indexOf(existingCartItem), 1)
        }

        // Lưu giỏ hàng sau khi thay đổi
        try {
            await userCart.save()
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message: 'Error saving cart after removing product',
                error,
            })
        }

        // Tính toán tổng tiền và số lượng sau khi xóa sản phẩm
        const total = userCart.items
            ? userCart.items.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0,
              )
            : 0

        const quantityInCart = userCart.items
            ? userCart.items.reduce((acc, item) => acc + item.quantity, 0)
            : 0

        res.json({
            cart: userCart,
            quantity: quantityInCart,
            total: total,
            userValue: req.user,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error', error })
    }
}

//increaseQuantityInCart
const increaseQuantityInCart = async (req, res) => {
    try {
        const userId = req.user.id
        const productId = req.params.productId
        console.log('userId', req.user)

        // Lấy giỏ hàng của người dùng
        let userCart = await CartModel.findOne({ user: userId })
            .populate('user')
            .populate('items.product')
            .exec()
        console.log('userCart', userCart)

        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' })
        }
        console.log('productId', productId)

        // Kiểm tra sự tồn tại của sản phẩm trong giỏ hàng
        const existingCartItem = userCart.items.find(
            item => item.product._id == productId,
        )
        console.log('userCart.items', userCart.items)

        if (!existingCartItem) {
            return res
                .status(404)
                .json({ message: 'Product not found in cart' })
        }

        // Tăng số lượng sản phẩm
        existingCartItem.quantity += 1

        // Lưu giỏ hàng sau khi thay đổi
        await userCart.save()

        // Lấy giỏ hàng sau khi cập nhật
        const updatedCart = await CartModel.findOne({ user: userId })
            .populate('user')
            .populate('items.product')
            .exec()

        if (!updatedCart) {
            return res.status(404).json({ message: 'Cart not found' })
        }
        console.log('updatedCart.items', updatedCart.items)
        // Tính toán tổng tiền và số lượng
        const total = updatedCart.items
            ? updatedCart.items.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0,
              )
            : 0
        const quantityInCart = updatedCart.items
            ? updatedCart.items.reduce((acc, item) => acc + item.quantity, 0)
            : 0

        res.json({
            cart: updatedCart,
            quantity: quantityInCart,
            total: total,
            userValue: req.user,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error', error })
    }
}

module.exports = {
    addToCart,
    getCart,
    removeFromCart,
    increaseQuantityInCart,
}
