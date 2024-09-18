import SearchInput from "./SearchInput.jsx"
import { useContext } from "react"
import { WeatherContext } from "../WeatherContext.js"
import WeatherDisplay from "./WeatherDisplay.jsx"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar.jsx"
export default function Layout() {
    const data = useContext(WeatherContext)

    return (
        <>
            <header className={`p-4 ${data.bodyClass === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-t-lg shadow-md flex flex-col gap-2`}>
                <h1>Type the city you are looking for</h1>
                <SearchInput />
            </header>
            <main className="p-5">
                <Navbar />
                <br />
                <WeatherDisplay />
                <Outlet />
            </main>
            <footer className={`p-4 text-center ${data.bodyClass === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-b-lg shadow-md`}>
                Project made by Arian-AJ  &copy; {new Date().getFullYear()}
            </footer>
        </>
    )
}