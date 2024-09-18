import SearchInput from "./SearchInput.jsx"
import { useEffect, useState } from "react"

import WeatherDisplay from "./WeatherDisplay.jsx"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar.jsx"
export default function Layout() {


    return (
        <>
            <header>
                <h1>Wetter-App</h1>

<SearchInput className="w-2/3" />
               

            </header>
            <main>
                <Navbar />
                <WeatherDisplay />
                <Outlet />
            </main>
            <footer>
                Project made by Arian-AJ  &copy; {new Date().getFullYear()}
            </footer>
        </>
    )
}