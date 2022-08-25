import './header.css'
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import companyLogo from './mukoheader.png';

export default function Header() {

    const [tab, setTab] = useState("Home");

    return(
        <nav className="header-content">
                    <NavLink className={"nav"} onClick={() => setTab("Home")} to={'/'}>
                        <img src={companyLogo} className="header-logo" alt="Muko-Logo"/>
                    </NavLink>

        </nav>
    )
}
