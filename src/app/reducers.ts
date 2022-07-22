import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from '../features/cart/CartSlice';

import checkoutReducer from '../features/checkout/CheckoutSlice';


export const rootReducer = combineReducers({
    cartState: cartReducer,
    checkoutState: checkoutReducer,
});

