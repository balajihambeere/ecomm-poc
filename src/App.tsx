import React, { Suspense } from 'react';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

const ProductsList = React.lazy(() => import('./features/products/ProductList'));
const ProductInfo = React.lazy(() => import('./features/products/ProductInfo'));
const Checkout = React.lazy(() => import('./features/checkout/Checkout'));

const theme = createTheme();

function App(): React.ReactElement {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <ResponsiveAppBar />
            <Box sx={{ mt: 2 }}>

              <Routes>
                <Route path="/" element={<ProductsList />} />
                <Route path="/:slug" element={<ProductInfo />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </Box>
            <Footer
              title="FootComm Footwear"
              description="Buy Quality Footwear Here!"
            />
          </div>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
