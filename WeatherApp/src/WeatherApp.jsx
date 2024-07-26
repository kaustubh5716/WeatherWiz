import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
import "./WeatherApp.css"
export default function WeatherApp(){
    const [weatherinfo , SetWeatherInfo] = useState({
        city : "Mumbai",
        feelsLike : 24.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        description : "haze",
    });

    let updateInfo = (newInfo) => {
        SetWeatherInfo(newInfo);

    }
    return (
        <div>
            <h1 style={{textAlign : "center"}}>Weather App</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherinfo}/>
        </div>
    );
}