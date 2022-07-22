import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AddressType, PaymentDetailsType, PaymentsType } from './CheckoutType';

interface CheckoutState {
    shippingAddress: AddressType;
    paymentDetails: PaymentDetailsType;
    payments: PaymentsType[];
}

const initialState: CheckoutState = {
    shippingAddress: {} as AddressType,
    paymentDetails: {} as PaymentDetailsType,
    payments: [] as PaymentsType[]
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        shippingAddressAction: (state, action: PayloadAction<AddressType>) => {
            state.shippingAddress = action.payload;
        },
        paymentDetailsAction: (state, action: PayloadAction<PaymentDetailsType>) => {
            state.paymentDetails = action.payload;
            const payments = [
                { name: 'Card type', detail: 'Visa' },
                { name: 'Card holder', detail: action.payload.cardName ?? state.paymentDetails.cardName },
                { name: 'Card number', detail: action.payload.cardNumber ?? state.paymentDetails.cardNumber },
                { name: 'Expiry date', detail: action.payload.expiryDate ?? state.paymentDetails.expiryDate },
            ];
            state.payments = payments;
        },
        clearCheckoutAction: (state) => {
            state.shippingAddress = {} as AddressType;
            state.paymentDetails = {} as PaymentDetailsType;
            state.payments = [] as PaymentsType[];
        },
    },
})

export const { shippingAddressAction, paymentDetailsAction, clearCheckoutAction } = checkoutSlice.actions

export const selectShippingAddress = (state: RootState) => state.checkoutState.shippingAddress;

export const selectPayments = (state: RootState) => state.checkoutState.payments;

export const selectPaymentDetails = (state: RootState) => state.checkoutState.paymentDetails;

export default checkoutSlice.reducer