import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = (props) =>{
    return(
        <nav className="navbar navbar-dark bg-dark Navbar-container">
            <div className="container-fluid">
                <Link className="navbar-brand Navbar-title" to="/">Martín España</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 Navbar-ul flex-row padding-zero">
                    <li className="nav-item">
                        <Link className={props.sample === true ? "nav-link active Navbar-element" : "nav-link Navbar-element"} to="/samples">Samples</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={props.about === true ? "nav-link active Navbar-element" : "nav-link Navbar-element"} to="/aboutme">About Me</Link>
                    </li> 
                </ul>
            </div>
        </nav>
    )
}

export default Navbar