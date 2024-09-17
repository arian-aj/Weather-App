import { useContext } from "react";
import { WeatherContext } from "../WeatherContext.js";

export default function Humidity() {
    const data = useContext(WeatherContext);

    

    return (
        <div>
            <h2>Current Humidity</h2>
            <h2>{data.weatherData.main.humidity} %</h2>
      </div>
    )
}