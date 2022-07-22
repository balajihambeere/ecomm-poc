import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../products/ProductType';
import { RootState } from '../../app/store';

interface CartState {
    cartItems: ProductType[];
    totalPrice: number;
}

const initialState: CartState = {
    cartItems: [] as ProductType[],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartAction: (state, action: PayloadAction<ProductType>) => {
            const foundItem = state.cartItems.findIndex(item => item.productId === action.payload.productId);

            if (foundItem > -1) {
                state.cartItems[foundItem] = action.payload;
            } else {
                state.cartItems.push(action.payload);
            }

            let totalPrice = 0;
            state.cartItems.forEach(item => {
                totalPrice += item.price;
            })
            state.totalPrice = totalPrice;

        },

        clearCartAction: (state) => {
            state.cartItems = [];
            state.totalPrice = 0;

        },
    },
})

export const { addToCartAction, clearCartAction } = cartSlice.actions

export const selectCartItem = (state: RootState) => state.cartState.cartItems;

export const selectTotalPrice = (state: RootState) => state.cartState.totalPrice;

export default cartSlice.reducer