import React from 'react'
import profile from '../../assets/IMG_8909.jpg'
import pikachu from '../../assets/pikachu.gif'
import Gallery from '../Gallery/Gallery.js'
import './About.css'

class About extends React.Component {
    render() {
        return(
            <div>
                <div className="about-section">
                    <h1>Hi, I'm Ryan.</h1>
                    <img src={profile} alt="profile" id="profile"></img>
                    <div className="about-text-container">
                        <div className="about-text">
                            <p className="about-edu">I'm a junior at UC Berkeley studying Electrical Engineering and Computer Science.</p>
                            <p>I'm passionate about building products with others that have an impact on people's wellbeing.</p>
                            <p>In my free time I enjoy building mechanical keyboards, playing / watching basketball (Go Suns!), and traveling with friends.</p>
                        </div>
                    </div>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/ryanhuang36/" target="_blank"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"/></a>
                        <a href="https://github.com/ryanhuang36" target="_blank"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a>
                        <a href="mailto: ryanhuang@berkeley.edu"><img src="https://img.icons8.com/ios-glyphs/30/000000/filled-message.png"/></a>
                    </div>
                </div>
                <img src={pikachu} id="pikachu"></img>
                <Gallery></Gallery>
            </div>
        )
    }
}

export default About;