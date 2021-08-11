export default function AppIcon({name}) {
    const Icon = require(`@icon/${name}.svg`).default
    return (
        <div id="app-icon">
            <Icon className="a-icon"/>
        </div>
    )
}