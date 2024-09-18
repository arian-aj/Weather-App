import { useContext, useEffect } from "react";
import { WeatherContext } from "../WeatherContext.js";
export default function WeatherDisplay() {
    const data = useContext(WeatherContext)
    
    useEffect(() => {
        console.log("Weather data:", data.weatherData);
      }, [data]);
    
    


    const imgAddress = `http://openweathermap.org/img/wn/${data.weatherData.weather[0].icon}@2x.png`
    console.log("img Address:", imgAddress);
    
    return(
        <div className="flex flex-col">
            <h2>{data.weatherData.name}</h2>
            <img src={imgAddress} alt="weather-icon" />    
            <p>{data.weatherData.weather[0].description}</p>
        </div>
    )
}