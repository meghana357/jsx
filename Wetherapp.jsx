import React,{useState} from 'react'
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import './Wetherapp.css';
const Wetherapp = () => {

  const [district,setDistrict]= useState("");
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${district,city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }

  return (
    <div className="formContainer">
        <Container maxWidth="sm">
      <center>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title" style={{color:'yellow'}}>WEATHER APP</h1>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="city" onChange={changeHandler} value={city}/> <br /><br />
              <input type="submit" value="Get Temperature" />
            </form><br /> <br />
            <div>
               <h1>{result}</h1>
            </div>
          </div>
        </div>
      </center>
      </Container>
    </div>
  )
}

export default Wetherapp;
