import React from 'react'
import logo from "../images/logo.jpg";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src='logo'/>
        </div>
        <div className='rightside'>
            <Link to="/">Home</Link>
            <Link to="/menu">Dashboard</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About Us</Link>
        </div>
      
      
    </div>
  );
}

export default Navbar;



{/*import React, { useState, useEffect } from 'react';
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
  
*/}
{/*}

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Web3 from 'web3';
import contractABI from './contractABI.json'; // Replace with the actual path to your contract ABI
import truffleContract from 'truffle-contract';

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
    const fetchCurrentPrice = async () => {
      try {
        const web3 = new Web3(window.ethereum);
        const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with the actual address of your deployed contract
        const contract = truffleContract(contractABI);
        contract.setProvider(web3.currentProvider);

        const instance = await contract.at(contractAddress);
        const price = await instance.currentPrice();
        setCurrentPrice(price.toNumber());
      } catch (error) {
        console.error('Error fetching current price:', error);
      }
    };

    fetchCurrentPrice();
    const intervalId = setInterval(fetchCurrentPrice, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleBuySubmit = async (e) => {
    e.preventDefault();
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with the actual address of your deployed contract
      const contract = truffleContract(contractABI);
      contract.setProvider(web3.currentProvider);

      const buyAmount = parseInt(buyUnits);

      const instance = await contract.at(contractAddress);
      await instance.buy(buyAmount, { from: accounts[0], value: web3.utils.toWei((currentPrice * buyAmount).toString()) });

      setBuySnackbarOpen(true);
      setBuyUnits('');
    } catch (error) {
      console.error('Error buying:', error);
    }
  };

  const handleBuySnackbarClose = () => {
    setBuySnackbarOpen(false);
  };

  const handleSellSubmit = async (e) => {
    e.preventDefault();
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with the actual address of your deployed contract
      const contract = truffleContract(contractABI);
      contract.setProvider(web3.currentProvider);

      const sellAmount = parseInt(sellUnits);

      const instance = await contract.at(contractAddress);
      await instance.sell(sellAmount, { from: accounts[0] });
      setSellSnackbarOpen(true);
      setSellUnits('');
    } catch (error) {
      console.error('Error selling:', error);
    }
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
            value={sellUnits}
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
*/}

     

