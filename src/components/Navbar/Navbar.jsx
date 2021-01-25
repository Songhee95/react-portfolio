import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    
    const handleClick = () =>setClicked(!clicked);
    const closeMenu = ()=> setClicked(false);

    return (
        <>
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="head-icons">
                        <Link className="navbar-brand" to="/" onClick={closeMenu}>Songhee Yim</Link>
                        <Link to="/github" target="_blank" className="navbar-brand" onClick={closeMenu}>
                            <i className="fab fa-github github"></i>
                        </Link>
                        <Link to="/linkedin" target="_blank" className="navbar-brand" onClick={closeMenu}>
                            <i className="fab fa-linkedin linkedin"></i>
                        </Link>
                    </div>
                    {/* mobile screen menu */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    {/* List of menu items */}
                    <div className={clicked ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink className="nav-links" to="/aboutme" onClick={closeMenu}>About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-links " to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="./files/resume_Songhee.pdf" target="_blank" download className="nav-links" onClick={closeMenu}>
                                <i className="fas fa-download"></i> RESUME
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="mailto:thdgml5537@gmail.com" className="nav-links" onClick={closeMenu}>
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
