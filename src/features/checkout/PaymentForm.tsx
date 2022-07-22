import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { paymentDetailsAction, selectPaymentDetails } from './CheckoutSlice';
import { PaymentDetailsType } from './CheckoutType';

export default function PaymentForm() {

    const paymentDetails: PaymentDetailsType = useAppSelector(selectPaymentDetails);

    const dispatch = useAppDispatch();

    const onCardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(paymentDetailsAction({ ...paymentDetails, cardName: event.target.value }));
    }

    const onCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(paymentDetailsAction({ ...paymentDetails, cardNumber: event.target.value }));
    }

    const onExpriyDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(paymentDetailsAction({ ...paymentDetails, expiryDate: event.target.value }));
    }

    const onCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(paymentDetailsAction({ ...paymentDetails, cvvNumber: event.target.value }));
    }

    const onSaveCardChange = (checked: boolean) => {
        dispatch(paymentDetailsAction({ ...paymentDetails, saveCardDetails: checked }));
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Name on card"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                        onChange={onCardNameChange}
                        value={paymentDetails?.cardName || ""}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                        onChange={onCardNumberChange}
                        value={paymentDetails?.cardNumber || ""}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label="Expiry date"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                        onChange={onExpriyDateChange}
                        value={paymentDetails?.expiryDate || ""}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                        onChange={onCvvChange}
                        value={paymentDetails?.cvvNumber || ""}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes"
                            checked={paymentDetails?.saveCardDetails || false}
                            onChange={(_, checked) => onSaveCardChange(checked)}
                        />}
                        label="Remember credit card details for next time"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}