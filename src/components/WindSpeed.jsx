import { useContext } from "react";
import { WeatherContext } from "../WeatherContext.js";

export default function WindSpeed() {
    const data = useContext(WeatherContext);

    

    return (
        <div>
            <h2>Current Windspeed</h2>
            <h2>{data.weatherData.wind.speed} m/s</h2>
      </div>
    )
}