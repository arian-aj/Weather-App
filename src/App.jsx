import { useState, useEffect } from 'react'
// import './App.css'
import { WeatherContext } from './WeatherContext.js'
import Layout from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom'
import Temperature from './components/Temperature.jsx'
import WindSpeed from './components/WindSpeed.jsx'
import Humidity from './components/Humidity.jsx'
import NotFound from './NotFound.jsx'
function App() {
  const apiKey = "6c58d02e23adc87f7d24c7835e5713f6"
  const [currentCity, setCurrentCity] = useState("")
  const [location, setLocation] = useState({latitude: null, longitude: null})
  const [weatherData, setWeatherData] = useState({
    main: {
      humidity: "",
      temp: ""
    },
    name: "",
    weather: [{
      description: "",
      icon: "",
    }],
    wind: {
      speed: "",
    }
  })
  const [searchedCity, setSearchedCity] = useState("");
  const [bodyClass, setBodyClass] = useState("");
  const [cityFound, setCityFound] = useState(true)





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
        setCityFound(false)
        throw new Error("Error fetching data")
      }
      setCityFound(true)
      return resp.json()
    })
    .then(data => {
      console.log("fetched data:", data)
      setWeatherData(data)
    })
    .catch(err => console.error("Error fetching", err))
  }, [currentCity])

  
    
  useEffect(() => {
      document.body.className = bodyClass;
  }, [bodyClass]);

  function toggleBackground() {
      setBodyClass(prevClass => prevClass === '' ? 'dark' : '');
  }
  

  
  return (
    <WeatherContext.Provider value={{cityFound, weatherData, setWeatherData, searchedCity, setCurrentCity, setSearchedCity, bodyClass, setBodyClass }}>
      <div className='h-screen'>
        <h1 className="text-4xl font-bold mt-8 mb-4 text-center">
          Weather App
        </h1>
        <button
          className={`absolute bottom-20 right-4 w-20 h-10 text-white rounded-lg text-xs p-1 ${bodyClass === "" ? "bg-red-500" : "bg-blue-500"}`}
          onClick={toggleBackground}
        >
          {bodyClass === "" ? "Dark Mode" : "Light Mode"}
        </button>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Temperature />} />
              <Route path='windspeed' element={<WindSpeed />} />
              <Route path='humidity' element={<Humidity />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </WeatherContext.Provider>
  )
}

export default App
