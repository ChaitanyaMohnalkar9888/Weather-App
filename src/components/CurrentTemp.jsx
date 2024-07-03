import React, { useEffect, useState } from "react";
const api = {
  key: "887b0b4d1be2392d3a6f93a7d6425adc",
  base: "https://api.openweathermap.org/data/2.5/weather",
};

export default function CurrentTemp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedCity, setSearchedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [cities, setcities] = useState([]);
  const [isfav, setisfav] = useState(false);
  // Function to fetch weather data
  const fetchWeather = (city) => {
    const url = `${api.base}?q=${city}&units=metric&appid=${api.key}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === 200) {
          if (cities.includes(result.name)) {
            setisfav(true);
          } else {
            setisfav(false);
          }
          setWeatherData(result);
          setSearchedCity(city);
        } else {
          setWeatherData(null);
          setSearchedCity(null);
        }
        setSearchQuery('')
        console.log(result)
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
        setSearchedCity(null);
      });
  };

  // Function to handle search
  const handleSearch = () => {
    fetchWeather(searchQuery);
  };
  const fav = [];
  useEffect(() => {
    const savedCities = localStorage.getItem('favciti');
    if (savedCities) {
      setcities(JSON.parse(savedCities));
    }
  }, []);

  const onAddToFav = (cityToRemove) => {
    if (!cities.includes(weatherData.name)) {
      setcities([...cities, weatherData.name]);
      localStorage.setItem('favciti', JSON.stringify([...cities,weatherData.name]));
    }
    if (cities.includes(weatherData.name)) {
      setisfav(true);
    } else {
      setisfav(false);
    }
    
  };

  const removeCityFromFav = (cityToRemove) => {
    const updatedCities = cities.filter(city => city !== cityToRemove);
    setcities(updatedCities);
    localStorage.setItem('favoriteCities', JSON.stringify(updatedCities));
  };

  return (
    <div className="w-5/6 m-8 h-full bg-slate-900 border p-4 border-sky-400 rounded-2xl">
      <div className="flex gap-4 p-2">
        <button
          type="button"
          onClick={handleSearch}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search Places
        </button>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          id="default-search"
          className="block w-full rounded-2xl p-2 text-sm text-white border border-gray-300 bg-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search city..."
        />
      </div>
      <div className="text-white flex w-full justify-center cursor-pointer">
        {cities.map((item) => {
          return (
            <div onClick={()=>fetchWeather(item)} className=" cursor-pointer flex justify-center items-center w-20 h-6 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex-col lg:flex  justify-center items-center">
        <div className="w-1/2 h-full flex-col p-8">
          {searchedCity && weatherData && (
            <>
              <div className="flex justify-center gap-x-6">
                <p className="text-white text-6xl">{weatherData.main.temp}°</p>
                <p className="text-white text-4xl">C</p>
              </div>
              <div className="flex justify-center gap-x-6">
                <p className="text-white text-2xl m-6">
                  {weatherData.weather[0].description}
                </p>
              </div>
              <div className="flex justify-center gap-x-6 mb-10">
                <p className="text-white text-xl">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </>
          )}

          <div className="flex justify-center">
            {weatherData && (
              <button
                onClick={onAddToFav}
                type="button"
                className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {!isfav ? "Add To Favourites" : "Remove From Faviourate"}
              </button>
            )}
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      {!searchedCity && (
        <div className="flex animate-ping justify-center items-center w-full h-full text-2xl font-extrabold text-white">
          Search Valid City
        </div>
      )}
    </div>
  );
}
