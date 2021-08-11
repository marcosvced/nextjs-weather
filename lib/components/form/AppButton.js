
export default function AppButton({children, name, onClick}) {
    return (
        <button onClick={onClick(name+name)} className={name}>
            {children}
        </button>
    )
}
