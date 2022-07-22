import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectShippingAddress, shippingAddressAction } from './CheckoutSlice';
import { AddressType } from './CheckoutType';

export default function AddressForm() {
    const address: AddressType = useAppSelector(selectShippingAddress);
    const dispatch = useAppDispatch();

    const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(shippingAddressAction({ ...address, firstName: event.target.value }));
    }
    const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(shippingAddressAction({ ...address, lastName: event.target.value }));
    }
    const onAddress1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(shippingAddressAction({ ...address, address1: event.target.value }));
    }

    const onAddress2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(shippingAddressAction({ ...address, address2: event.target.value }));
    }
    const onCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(shippingAddressAction({ ...address, city: event.target.value }));
    }

    const onStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(shippingAddressAction({ ...address, state: event.target.value }));
    }
    const onZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(shippingAddressAction({ ...address, zip: event.target.value }));
    }
    const onCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(shippingAddressAction({ ...address, country: event.target.value }));
    }
    const onIsAddressForPaymentChange = (checked: boolean) => {
        dispatch(shippingAddressAction({ ...address, isAddressForPayment: checked }));
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={onFirstNameChange}
                        value={address?.firstName || ""}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={onLastNameChange}
                        value={address?.lastName || ""}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={onAddress1Change}
                        value={address?.address1 || ""}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                        onChange={onAddress2Change}
                        value={address?.address2 || ""}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        onChange={onCityChange}
                        value={address?.city || ""}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                        onChange={onStateChange}
                        value={address?.state || ""}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        onChange={onZipChange}
                        value={address?.zip || ""}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        onChange={onCountryChange}
                        value={address?.country || ""}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress"
                            checked={address?.isAddressForPayment || false} onChange={(_, checked) => onIsAddressForPaymentChange(checked)} />}
                        label="Use this address for payment details"

                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}