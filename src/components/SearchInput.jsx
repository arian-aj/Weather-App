import { useContext } from "react"
import { WeatherContext } from "../WeatherContext.js"
export default function SearchInput() {

    const data = useContext(WeatherContext)
    return(
        <>
            <form action="submit" onSubmit={(e) => {
                e.preventDefault();
                data.setCurrentCity(data.searchedCity)
            }}>
                <input type="text" name="cityname" id="cityname" value={data.searchedCity} onChange={(e) => data.setSearchedCity(e.target.value)} />
                <button>Search</button>
            </form>
        </>
    )
}