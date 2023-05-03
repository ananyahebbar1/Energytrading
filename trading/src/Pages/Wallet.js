import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const ContainerStyled = styled(Container)(({ theme }) => ({
  maxWidth: 500,
  margin: '0 auto',
  padding: '24px', // or any other desired spacing value
  backgroundColor: '#f5f5f5',
  borderRadius: 8,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const useStyles = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '16px', // or any other desired spacing value
  },
  balance: {
    marginBottom: '16px', // or any other desired spacing value
  },
  history: {
    marginBottom: '16px', // or any other desired spacing value
  },
  listItem: {
    marginBottom: '8px', // or any other desired spacing value
    padding: '16px', // or any other desired spacing value
    backgroundColor: '#fff',
    borderRadius: 4,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  send: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  sendInput: {
    marginBottom: '8px', // or any other desired spacing value
    width: '100%',
  },
  sendButton: {
    padding: '8px 16px', // or any other desired spacing value
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
};

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [recipientAddress, setRecipientAddress] = useState('');
  const [transferAmount, setTransferAmount] = useState(0);

  useEffect(() => {
    // Fetch balance from blockchain network
    // and update the balance state
    fetchBalance();
    // Fetch transaction history from blockchain network
    // and update the transaction history state
    fetchTransactionHistory();
  }, []);

  const fetchBalance = () => {
    // Simulated fetch balance from blockchain network
    // Replace with your actual implementation
    const balanceFromBlockchain = 100; // Replace with actual balance retrieval code
    setBalance(balanceFromBlockchain);
  };

  const fetchTransactionHistory = () => {
    // Simulated fetch transaction history from blockchain network
    // Replace with your actual implementation
    const transactionHistoryFromBlockchain = [
      {
        id: 1,
        amount: 10,
        sender: '0xSenderAddress',
        receiver: '0xReceiverAddress',
        timestamp: '2023-04-28 10:00:00',
      },
      // Add more transaction objects
    ];
    setTransactionHistory(transactionHistoryFromBlockchain);
  };

  const handleSendTokens = () => {
    // Validate recipient address and transfer amount
        // Validate recipient address and transfer amount
        if (!recipientAddress || transferAmount <= 0) {
          alert('Please enter a valid recipient address and transfer amount.');
          return;
        }
    
        // Simulated send tokens to recipient
        // Replace with your actual implementation
        // Include proper blockchain transaction handling
        console.log(`Sending ${transferAmount} tokens to ${recipientAddress}`);
    
        // Update balance and transaction history states
        const updatedBalance = balance - transferAmount;
        setBalance(updatedBalance);
    
        const newTransaction = {
          id: transactionHistory.length + 1,
          amount: transferAmount,
          sender: 'Your Wallet Address',
          receiver: recipientAddress,
          timestamp: new Date().toLocaleString(),
        };
        setTransactionHistory([...transactionHistory, newTransaction]);
    
        // Reset input fields
        setRecipientAddress('');
        setTransferAmount(0);
      };
    
      return (
        <ContainerStyled>
          <Typography variant="h4" style={useStyles.title}>
            Wallet
          </Typography>
          <div style={useStyles.balance}>
            <Typography variant="h5">Balance: {balance} tokens</Typography>
          </div>
          <div style={useStyles.history}>
            <Typography variant="h5">Transaction History:</Typography>
            <List>
              {transactionHistory.map((transaction) => (
                <ListItem key={transaction.id} style={useStyles.listItem}>
                  <ListItemText
                    primary={`${transaction.amount} tokens`}
                    secondary={`Sender: ${transaction.sender}, Receiver: ${transaction.receiver}, Timestamp: ${transaction.timestamp}`}
                  />
                </ListItem>
              ))}
            </List>
          </div>
          <div style={useStyles.send}>
            <Typography variant="h5">Send Tokens</Typography>
            <TextField
              style={useStyles.sendInput}
              label="Recipient Address"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
            />
            <TextField
              style={useStyles.sendInput}
              label="Amount"
              type="number"
              value={transferAmount}
              onChange={(e) => setTransferAmount(parseFloat(e.target.value))}
            />
            <Button
              variant="contained"
              color="primary"
              style={useStyles.sendButton}
              onClick={handleSendTokens}
            >
              Send
            </Button>
          </div>
        </ContainerStyled>
      );
    };
    
    export default Wallet;
    
