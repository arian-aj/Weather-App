import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../WeatherContext.js";
export default function WeatherDisplay() {
    const data = useContext(WeatherContext)
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        console.log("Weather data:", data.weatherData);
        setIsLoaded(true);
    }, [data]);
    
    


    const imgAddress = `http://openweathermap.org/img/wn/${data.weatherData.weather[0].icon}@2x.png`
    console.log("img Address:", imgAddress);
    
    return(
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">{data.weatherData.name}</h2>
            <img 
            src={imgAddress} 
            alt="weather-icon" 
            className={`transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />    
            <p className="text-lg mt-2">{data.weatherData.weather[0].description}</p>
        </div>
    )
}