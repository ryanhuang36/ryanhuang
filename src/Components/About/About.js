import React from 'react'
import profile from '../../assets/ryan.jpg'
import pikachu from '../../assets/pikachu.gif'
import Gallery from '../Gallery/Gallery.js'
import './About.css'
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return(
            <div>
                <div className="about-section">
                    <h1>Hi, I'm Ryan.</h1>
                    <img src={profile} alt="profile" id="profile" style={{"borderRadius": 5}}></img>
                    <div className="about-text-container">
                        <div className="about-text">
                            <p className="about-edu">I'm a senior at UC Berkeley studying Electrical Engineering⚡and Computer Science💻.</p>
                            <p>I'm passionate about building products with others that have an impact on people's wellbeing.</p>
                            <p>In my free time I enjoy <Link id="about-link" to="/keeb">building mechanical keyboards</Link>, <a id="about-link" href="https://www.instagram.com/rhfilm_/" target="_blank" rel="noreferrer">shooting film</a>, <Link id="about-link" to="/jiayou">practicing wushu</Link>, and traveling with friends.</p>
                        </div>
                    </div>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/ryanhuang36/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" alt="linkedin" style={{paddingTop: 5, paddingRight: 5}}/></a>
                        <a href="https://github.com/ryanhuang36" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="github" style={{paddingTop: 5}}/></a>
                        <a href="mailto: ryanhuang@berkeley.edu"><img src="https://img.icons8.com/ios-glyphs/30/000000/filled-message.png" alt="mail" style={{paddingTop: 5, paddingLeft: 5}}/></a>
                    </div>
                </div>
                <img src={pikachu} id="pikachu" alt="pika-pika"></img>
                <Gallery></Gallery>
            </div>
        )
    }
}

export default About;