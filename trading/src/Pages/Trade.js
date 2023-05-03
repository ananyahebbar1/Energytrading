import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const BuySellContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 20,
});

const BuySellForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const BuySellButton = styled(Button)({
  marginTop: 10,
});

const Trade = () => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [buyUnits, setBuyUnits] = useState('');
  const [sellUnits, setSellUnits] = useState('');
  const [buySnackbarOpen, setBuySnackbarOpen] = useState(false);
  const [sellSnackbarOpen, setSellSnackbarOpen] = useState(false);

  useEffect(() => {
    // Simulated API call to fetch real-time current price
    // Replace with your actual implementation
    const fetchCurrentPrice = async () => {
      try {
        const response = await fetch('https://api.example.com/current-price');
        const data = await response.json();
        setCurrentPrice(data.price);
      } catch (error) {
        console.error('Error fetching current price:', error);
      }
    };

    fetchCurrentPrice();
    const intervalId = setInterval(fetchCurrentPrice, 5000); // Fetch price every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleBuySubmit = (e) => {
    e.preventDefault();
    // Perform the buy operation
    // Replace with your actual implementation

    // Show a success message
    setBuySnackbarOpen(true);
    setBuyUnits('');
  };

  const handleBuySnackbarClose = () => {
    setBuySnackbarOpen(false);
  };

  const handleSellSubmit = (e) => {
    e.preventDefault();
    // Perform the sell operation
    // Replace with your actual implementation

    // Show a success message
    setSellSnackbarOpen(true);
    setSellUnits('');
  };

  const handleSellSnackbarClose = () => {
    setSellSnackbarOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4">Real-Time Current Pricing</Typography>
      <Typography variant="h5">Current Price: {currentPrice} per unit</Typography>

      <BuySellContainer>
        <Typography variant="h5">Buy Current</Typography>
        <BuySellForm onSubmit={handleBuySubmit}>
          <TextField
            label="Units"
            value={buyUnits}
            onChange={(e) => setBuyUnits(e.target.value)}
          />
          <BuySellButton variant="contained" color="primary" type="submit">
            Buy
          </BuySellButton>
        </BuySellForm>
        <Snackbar
          open={buySnackbarOpen}
          autoHideDuration={3000}
          onClose={handleBuySnackbarClose}
          message="Buy operation successful"
        />
      </BuySellContainer>

      <BuySellContainer>
        <Typography variant="h5">Sell Current</Typography>
        <BuySellForm onSubmit={handleSellSubmit}>
          <TextField
            label="Units"
            value={
              sellUnits}
              onChange={(e) => setSellUnits(e.target.value)}
            />
            <BuySellButton variant="contained" color="primary" type="submit">
              Sell
            </BuySellButton>
          </BuySellForm>
          <Snackbar
            open={sellSnackbarOpen}
            autoHideDuration={3000}
            onClose={handleSellSnackbarClose}
            message="Sell operation successful"
          />
        </BuySellContainer>
      </Container>
    );
  };
  
  export default Trade;