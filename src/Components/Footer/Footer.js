import React from 'react'
import './Footer.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <p id="madeWith">Made with ❤️ by iryhu</p>
            </div>
        )
    }
}

export default Footer;