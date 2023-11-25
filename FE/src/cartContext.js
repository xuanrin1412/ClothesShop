const { createContext, useState, useContext } = require('react')

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(0)

    const updateQuantity = newQuantity => {
        setQuantity(newQuantity)
    }

    return (
        <CartContext.Provider value={{ quantity, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext)
}
