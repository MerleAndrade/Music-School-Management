import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

export default function Home () {

    const [tab, setTab] = useState("Home");

    useEffect(() => {
        document.title = tab;
    })

    return (
        <nav className= "menu">
            <NavLink className={"nav"} onClick={() => setTab("Teacher")} to={'/teachers'}><img src={"../pictures/teacher.png"} alt={"Teacher"}/></NavLink>
        </nav>

    )
}
