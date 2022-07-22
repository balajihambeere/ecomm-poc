import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { createContext } from 'react';
import ResponsiveAppBar from './AppBar';
import Footer from './Footer';
import ProductsList from './features/products/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import ProductInfo from './features/products/ProductInfo';
import Checkout from './features/checkout/Checkout';


const theme = createTheme();

function App(): React.ReactElement {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
