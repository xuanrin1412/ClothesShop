// cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        updateCart(state, action) {
            const { items, quantity, total } = action.payload
            state.items = items
            state.quantity = quantity
            state.total = total
        },
    },
})

export const { updateCart } = cartSlice.actions
export default cartSlice.reducer
