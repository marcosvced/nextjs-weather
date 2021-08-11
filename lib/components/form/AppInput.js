export default function AppInput({onInput, placeholder}) {

    const handleChange = event => {
        onInput(event.target.value);
    }

    return (
        <input placeholder={placeholder} onChange={handleChange}/>
    );
}