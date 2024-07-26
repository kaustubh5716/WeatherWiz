import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city , SetCity] = useState("");
    let [error , SetError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "340e9f3e2ec77473a6357d6317f9ae94";

    let getWeatherInfo = async () => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);

        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            description : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    }catch(err){
        throw err;

    }

    };
    let handleChange = (evt) => {
        SetCity(evt.target.value);
    }
    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        SetCity("");
       const newInfo = await getWeatherInfo();
       updateInfo(newInfo);
        }catch(err){
            SetError(true);
        }
    }
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color : "red"}}> No such Place exist in Our API</p>} 
            </form>
        </div>
    );
}