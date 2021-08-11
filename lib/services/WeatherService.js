const WeatherService = {
    async getWeather(city) {
        return (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=753bf7675696927d1daa601c92d681df&units=metric`)).json()
    }
}

export default WeatherService