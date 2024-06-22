import React, { useState } from 'react';
const api = {
  key: "887b0b4d1be2392d3a6f93a7d6425adc",
  base: 'https://api.openweathermap.org/data/2.5/weather'
}

export default function CurrentTemp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedCity, setSearchedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data
  const fetchWeather = (city) => {
    const url = `${api.base}?q=${city}&units=metric&appid=${api.key}`;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        if (result.cod === 200) {
          setWeatherData(result);
          setSearchedCity(city);
        } else {
          setWeatherData(null);
          setSearchedCity(null);
        }
        console.log(result);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
        setSearchedCity(null);
      });
  }

  // Function to handle search
  const handleSearch = () => {
    fetchWeather(searchQuery);
  }

  return (
    <div className="bg-slate-950 border-2 border-x-gray-900 p-4 rounded-lg h-full">
      <div className="w-96 h-full bg-slate-900 border-2 border-sky-400">
        <div className="flex gap-4 p-2">
          <button
            type="button"
            onClick={handleSearch}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search Places
          </button>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="default-search"
            className="block w-full p-2 text-sm text-white border border-gray-300 bg-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search city..."
          />
        </div>
        {searchedCity && weatherData && (
          <>
            <div className="flex justify-center gap-x-6">
              <p className="text-white text-6xl">{weatherData.main.temp}°</p>
              <p className="text-white text-4xl">C</p>
            </div>
            <div className="flex justify-center gap-x-6">
              <p className="text-white text-2xl m-6">{weatherData.weather[0].description}</p>
            </div>
            <div className="flex justify-center gap-x-6 mb-10">
              <p className="text-white text-xl">{new Date().toLocaleDateString()}</p>
            </div>
          </>
        )}
        {!searchedCity && (
          <div className="flex justify-center text-white text-sm">
            City not found
          </div>
        )}
        <div className='flex justify-center'>
          <button
            type="button"
            className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add To Favourites
          </button>
        </div>
      </div>
    </div>
  );
}
