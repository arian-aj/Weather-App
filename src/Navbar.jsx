import { NavLink } from "react-router-dom";

export default function Navbar() {
    
    return (
        <nav>
            <NavLink to="/">Temperature </NavLink>
            <NavLink to="/windspeed">Wind Speed </NavLink>
            <NavLink to="/humidity">Humidity</NavLink>
        </nav>
    )
}