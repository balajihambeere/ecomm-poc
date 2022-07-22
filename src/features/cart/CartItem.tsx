import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ProductType } from '../products/ProductType';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface CarItemProps {
    carItem: ProductType[];
    handleCloseUserMenu: () => void;
}
const CarItem = (props: CarItemProps): React.ReactElement => {
    const { carItem, handleCloseUserMenu } = props;
    const navigate = useNavigate();
    return (
        <Box>
            {
                carItem.length > 0 ? (<Typography component="div" variant="h5">
                    Your Cart
                </Typography>) : <Typography component="div">
                    Your Cart
                </Typography>
            }

            <List>
                {carItem && carItem.map((item: ProductType) => {
                    return (
                        <ListItem disablePadding key={item?.productId}>
                            <Card sx={{ display: 'flex' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="body1" style={{ width: 300 }}>
                                            {item?.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {'Price: '} {item?.price}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {'Size:   '} {item?.size}
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image={item?.imageUrl}
                                    alt={item?.name}
                                />
                            </Card>
                        </ListItem>
                    )
                })}
            </List>
            {
                carItem.length > 0 && <Button variant="contained" onClick={() => {
                    navigate('/checkout');
                    handleCloseUserMenu();
                }}>Checkout</Button>
            }
        </Box>

    );
}

export default CarItem;
