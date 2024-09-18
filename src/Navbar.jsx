import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { WeatherContext } from "./WeatherContext.js";
export default function Navbar() {
    const data = useContext(WeatherContext)
    return (
        <nav className={`bg-${data.bodyClass === ""? "red" : "blue"}-500 p-2 shadow-lg flex justify-between w-full gap-2`}>
            <NavLink 
            to="/"
            className={`text-white`}
            >
                Temperature 
            </NavLink>
            <NavLink 
            to="/windspeed"
            className={`text-white`}
            >
                Wind
            </NavLink>
            
            <NavLink 
            to="/humidity"
            className={`text-white`}
            >
                Humidity
            </NavLink>
        </nav>
    )
}