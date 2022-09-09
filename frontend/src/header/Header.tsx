import './header.css'
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import companyLogo from './mukoheader.png';

export default function Header() {

    const [tab, setTab] = useState("");

    return(
        <nav className="header-content">
                    <NavLink className={"nav"} onClick={() => setTab("")} to={'/'}>
                        <img src={companyLogo} className="header-logo" alt="Muko-Logo"/>
                        <div> {tab}</div>
                    </NavLink>

        </nav>
    )
}
