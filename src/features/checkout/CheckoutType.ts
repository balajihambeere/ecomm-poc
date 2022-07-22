export interface AddressType {
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    isAddressForPayment: boolean;
}

export interface PaymentDetailsType {
    cardName: string;
    cardNumber: string;
    expiryDate: string;
    cvvNumber: string;
    saveCardDetails: boolean;
}

export interface PaymentsType {
    name: string;
    detail: string;
}