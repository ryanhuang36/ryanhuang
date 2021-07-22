import React from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="Navbar-Items">
                <Link className="navbar-logo navbar-item" to="/ryanhuang">Ryan</Link>
                <ul>
                    <li><Link className="navbar-item" to="/Experience">Experience</Link></li>
                    <li><Link className="navbar-item" to="/Resume">Resume</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;