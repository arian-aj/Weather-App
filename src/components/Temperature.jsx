import { useContext } from "react";
import { WeatherContext } from "../WeatherContext.js";

export default function Temperature() {
    const data = useContext(WeatherContext);

    

    return (
        <div>
            <h2>Current Temperature</h2>
            <h2>{data.weatherData.main.temp} °C</h2>
      </div>
    )
}