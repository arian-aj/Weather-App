import { useContext } from "react"
import { WeatherContext } from "../WeatherContext.js"
export default function SearchInput() {

    const data = useContext(WeatherContext)
    return(
        <>
            <form 
            className="flex flex-row gap-1"
            action="submit" 
            onSubmit={(e) => {
                e.preventDefault();
                data.setCurrentCity(data.searchedCity)
            }}>
                <input
                type="text" 
                name="cityname" 
                id="cityname" 
                value={data.searchedCity} 
                onChange={(e) => data.setSearchedCity(e.target.value)} 
                className="border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                
                />
                <button
                    type="submit"
                    className={` bg-${data.bodyClass === ""? "red" : "blue" }-500 text-white rounded-lg hover:bg-blue-700`}
                >
                    Search City
                </button>
            </form>
            {
                data.cityFound? "" : <p className="mt-2 text-red-500 text-sm">Error: City not found. Try again.</p>
            }
        </>
    )
}