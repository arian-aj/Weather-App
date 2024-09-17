import { useState, useEffect } from 'react'
import './App.css'
import { WeatherContext } from './WeatherContext.js'

function App() {
  const apiKey = "6c58d02e23adc87f7d24c7835e5713f6"
  const [currentCity, setCurrentCity] = useState("")
  const [location, setLocation] = useState({latitude: null, longitude: null})
  const [weatherData, setWeatherData] = useState({
    cityName: ""
  })
  const [searchedCity, setSearchedCity] = useState("");
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (location.latitude !== null) {
      fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${location.latitude}&lon=${location.longitude}&apiKey=a0264f57b95d4d6ca6ec298f8fa2a81d`)
      .then(resp => {
        if(!resp.ok) {
          throw new Error("Error Fetching Data")
        }
        return resp.json()
      })
      .then(data => {
        console.log("city name:", data.features[0].properties.city)
        let currentLocatedCity = data.features[0].properties.city;
        setCurrentCity(currentLocatedCity)
      })
      .catch(err => console.error("Error", err))
    }
  }, [location])


  console.log(location)
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Error fetching data")
      }
      return resp.json()
    })
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error("Error fetching", err))
  }, [currentCity])


  return (
    <WeatherContext.Provider value={[weatherData, setWeatherData]}>
      <form action="submit" onSubmit={(e) => {
        e.preventDefault();
        setCurrentCity(searchedCity)
      }}>
        <input type="text" name="cityname" id="cityname" value={searchedCity} onChange={(e) => setSearchedCity(e.target.value)}/>
        <button>Search</button>
      </form>
    </WeatherContext.Provider>
  )
}

export default App
