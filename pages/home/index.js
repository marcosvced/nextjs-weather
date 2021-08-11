import WeatherCard from "../../lib/components/media/weatherCard/WeatherCard";

export default function Home() {
    const cities = [
        'Barcelona',
        'Munich',
        'San Francisco',
        'Sydney'
    ]
    return (
        <section className="main" id="home">
            <div className="widget-wrapper">
                {cities.map((city, index) => {
                    return (
                        <div className="card-wrapper" key={index}>
                            <WeatherCard city={city} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}