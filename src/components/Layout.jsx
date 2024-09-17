import SearchInput from "./SearchInput.jsx"
import { useContext } from "react"
import { WeatherContext } from "../WeatherContext.js"
import WeatherDisplay from "./WeatherDisplay.jsx"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar.jsx"
export default function Layout() {
    
    return (
        <>
            <header>
                <h1>Wetter-App</h1>
                <SearchInput />
            </header>
            <main>
                <Navbar />
                <WeatherDisplay />
                <Outlet />
            </main>
        </>
    )
}