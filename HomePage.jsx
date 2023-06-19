import React from 'react';
import './HomePage.css';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';


const HomePage = () => {
  return (
  <div className='formContainer'>
   
    
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Grid container spacing={2} direction="column" alignItems="center" >
          <Grid item>
            <Typography variant="h4" component="h1" align="center"  style={{color:'Plum'}}> 
              <b>SEARCH</b>

              
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" align="center">
              KNOW THE TEMPERATURE OF CITY/COUNTRY
            </Typography>
          </Grid>
          <Grid item>
            {/* Replace this button with your chat interface component */}
            <Button variant="contained" color="primary" fullWidth href='/wet'>
              Start 
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
    </div>
  );
};

export default HomePage;