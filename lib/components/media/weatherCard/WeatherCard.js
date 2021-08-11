import {useEffect, useState} from "react";
import getWeatherAction from "./actions/getWeatherAction";

export default function WeatherCard({city}) {
    const [weather, setWeather] = useState();

    useEffect(() => {
        getWeatherAction(city).then(response => {
            setWeather(response)
        })
    }, [])

    if(!weather) {
        return <div className="loading">loading...</div>
    }

    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    return (
        <div className="weather-card">
            <span className="city">{weather.name}</span>
            <span className="weather">{weather.weather[0].main}</span>

            <div className="wrapper">
                <span className="temperature">{weather.main.temp}</span>
                <img className="icon" src={iconUrl} width="50px" height="50px" alt="weather icon"/>
            </div>
            <div className="temperatures">
                <span className="maximum">H: {weather.main.temp_max}</span>
                <span className="minimum">L: {weather.main.temp_min}</span>
            </div>

            <div className="humidity">Humidity: {weather.main.humidity}%</div>
            <div className="wind">Wind: {weather.wind.speed}</div>
        </div>
    )
}