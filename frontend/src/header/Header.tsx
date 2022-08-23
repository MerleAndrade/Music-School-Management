import './header.css'

export default function Header() {
    return (
        <>
        <img src={"../pictures/muko.png"} className="logo" alt="Muko-Logo" />
            <hr  style={{
                color: '#FCC174',
                backgroundColor: '#FCC174',
                height: 20,
                borderColor : '#FCC174'
            }}/>
        </>
    )
}
