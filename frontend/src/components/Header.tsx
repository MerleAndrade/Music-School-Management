import './header.css'
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import companyLogo from '../companyLogo/mukoheader.png';

export default function Header() {

    const [tab, setTab] = useState("");

    return (
        <header className="header-content">
            <nav>
                <NavLink className={"nav"} onClick={() => setTab("")} to={'/'}>
                    <img src={companyLogo} className="header-logo" alt="Muko-Logo"/>
                    <div> {tab}</div>
                </NavLink>
            </nav>
        </header>
    )
}
