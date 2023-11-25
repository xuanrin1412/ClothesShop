// wishRedux.js

import { createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        products: [],
        quantity: 0,
    },
    reducers: {
        addToWishlist: (state, action) => {
            // Check if the product is already in the wishlist
            const existingProductIndex = state.products.findIndex(
                product => product._id === action.payload._id,
            )

            if (existingProductIndex === -1) {
                // If the product is not in the wishlist, add it to the array
                state.products.push(action.payload)
                state.quantity += 1
            }
        },
        // Add more actions if needed (removeFromWishlist, clearWishlist, etc.)
    },
})

export const { addToWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
