import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useAppSelector } from '../../app/hooks';
import { selectCartItem, selectTotalPrice } from '../cart/CartSlice';
import { selectPayments, selectShippingAddress } from './CheckoutSlice';

export default function Review() {
    const carItems = useAppSelector(selectCartItem);

    const totalPrice = useAppSelector(selectTotalPrice);

    const shippingAddress = useAppSelector(selectShippingAddress);

    const payments = useAppSelector(selectPayments);
    console.log(payments);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {carItems && carItems.map((item) => (
                    <ListItem key={item.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={item.name} secondary={item.price} />
                        <Typography variant="body2">{item.price}</Typography>
                    </ListItem>

                ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {totalPrice}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{shippingAddress.firstName + " " + shippingAddress.lastName}</Typography>
                    <Typography gutterBottom>{`${shippingAddress.address1}
                    ${shippingAddress.address2}
                    `}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments && payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}