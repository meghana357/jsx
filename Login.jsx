import React, { useState } from 'react';
import './Login.css';
import { Container, Typography, TextField, Button, Grid, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
let n=useNavigate("")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


let Log=()=>{
    n("/Home")
  }
return (
    <div className='formContainer'>
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '5rem' }}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h4" component="h1" align="center">
             WEATHER APP
            </Typography>
          </Grid>
          <br></br><br></br>
           
          <TextField
              label="username"
              variant="outlined"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br></br>
  
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <Grid item>
            <Button variant="contained" color="primary" onClick={Log}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
      </Container>
      </div>
  );
};
export default Login;
