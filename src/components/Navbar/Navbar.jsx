import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import './Navbar.css'

function Navbar() {
    const [clicked, setClicked] = useState(false);
    
    const handleClick = () =>setClicked(!clicked);

    return (
        <>
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Songhee Yim</Link>
                    {/* mobile screen menu */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    {/* List of menu items */}
                    <div className={clicked ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink className="nav-links" to="/about">About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-links" to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/files/resume_Songhee.pdf" target="_blank" className="nav-links">
                                <i className="fas fa-download"></i> RESUME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="mailto:thdgml5537@gmail.com" className="nav-links">
                                <i className="fas fa-paper-plane"></i> HIRE ME
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar
