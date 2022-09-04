import * as React from "react";
import './WeatherSearch.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import Getweather from "../getweather/Getweather";


export default function WeatherSearch() {

  const[city,setCity]=React.useState("");
  const[click,setCliked]=useState(false);
  const[weatherData, setWeatherData]=useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(result=>result.json())
    .then(data=>{
      setWeatherData(data);
    })
  },[])
  console.log(weatherData,"abc")
  
  const handleSubmit=(e)=>{
    setCliked(true);
  }
  console.log("abc",city);
  return (
    <div className="WeatherSearchContainer">
      <div className="CardContainer">
       <div>
        <h4 className="Heading">Search Your City Weather</h4>
        <img src="weatherlogo.png" className="Logo"></img>
       </div>
       <div className="InputContainer">
       <TextField id="outlined-basic" label="Enter your city" variant="outlined" onChange={(e)=>setCity(e.target.value)}/>
       <Button type="submit" variant="contained" onClick={handleSubmit} >Search</Button>
       {/* {click? (<Getweather/>):(<WeatherSearch/>)}   */}
       </div>
       </div>
       
    </div>
  );
}
