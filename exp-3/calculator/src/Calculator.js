// src/Calculator.js
import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Box } from '@mui/material';
import './Calculator.css'; // Custom styling for additional tweaks

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button input
  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  // Clear input and result
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  // Calculate the result
  const calculateResult = () => {
    try {
      const calculatedResult = eval(input); // Evaluate the input expression
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <Box
      className="calculator-container"
      sx={{
        p: 3,
        maxWidth: '320px',
        margin: 'auto',
        backgroundColor: '#f3f4f6',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Calculator
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={input}
        placeholder="Enter your calculation"
        InputProps={{
          readOnly: true,
        }}
        sx={{ mb: 2 }}
      />
      <Typography variant="h6" align="right" sx={{ mb: 2 }}>
        Result: {result}
      </Typography>

      <Grid container spacing={2}>
        {['7', '8', '9', '/'].map((symbol) => (
          <Grid item xs={3} key={symbol}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleInput}
              value={symbol}
              sx={{ fontSize: '1.5rem' }}
            >
              {symbol}
            </Button>
          </Grid>
        ))}
        {['4', '5', '6', '*'].map((symbol) => (
          <Grid item xs={3} key={symbol}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleInput}
              value={symbol}
              sx={{ fontSize: '1.5rem' }}
            >
              {symbol}
            </Button>
          </Grid>
        ))}
        {['1', '2', '3', '-'].map((symbol) => (
          <Grid item xs={3} key={symbol}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleInput}
              value={symbol}
              sx={{ fontSize: '1.5rem' }}
            >
              {symbol}
            </Button>
          </Grid>
        ))}
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={clearInput}
            sx={{ fontSize: '1.5rem', backgroundColor: '#f44336', color: '#fff' }}
          >
            C
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleInput}
            value="0"
            sx={{ fontSize: '1.5rem' }}
          >
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleInput}
            value="."
            sx={{ fontSize: '1.5rem' }}
          >
            .
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleInput}
            value="+"
            sx={{ fontSize: '1.5rem' }}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            onClick={calculateResult}
            sx={{ fontSize: '1.5rem', backgroundColor: '#4caf50', color: '#fff' }}
          >
            =
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calculator;