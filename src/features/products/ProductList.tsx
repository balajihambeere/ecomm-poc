import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductType } from './ProductType';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const ProductsList = (): React.ReactElement => {
    const { data } = useQuery(['products'], () =>
        fetch('http://localhost:3004/products').then(res =>
            res.json()
        )
    )
    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        data && data.map((item: ProductType) => {
                            return (
                                <Grid item xs={12} md={3} key={item.productId}>
                                    <Link to={`/${item.slug}`} style={{ textDecoration: 'none' }} >
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={item.imageUrl}
                                                alt="green iguana"
                                            />
                                            <CardContent style={{ marginTop: "auto" }}>
                                                <Grid
                                                    container item xs={12}
                                                >
                                                    <Grid item xs={9}>
                                                        <Typography gutterBottom component="div">
                                                            {item.name}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {item.price}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Container >
    );
}

export default ProductsList;