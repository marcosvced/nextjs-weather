import WeatherService from "../../../../services/WeatherService";

export default async function getWeatherAction(city) {
    return await WeatherService.getWeather(city)
}