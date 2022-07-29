import React from 'react'
import './Wushu.css'
import Broadsword from '../../assets/broadsword.JPG'
import Chainwhip from '../../assets/chainwhip.JPG'
import Tornado from '../../assets/tornado.JPG'
import IWG from '../../assets/iwg.HEIC'

class Wushu extends React.Component {
    render() {
        return(
            <div className="wushu">
                <p className="wushu-text">Wushu(武术) is a form of Chinese martial arts that I've practiced since I was 11. I train in taolu, which are set routines or forms that involve predetermined moves including kicks,
                    punches, sweeps, jumps, and flips completed in a performative manner. I'm currently a co-captain of Cal Wushu (UC Berkeley's collegiate team). Here's a few pics and videos for reference :)
                </p>
                <div>
                    <img id="iwg" className="gallery-photo" src={IWG} alt="iwg"></img>
                </div>
                <div>
                    <img className="gallery-photo" src={Broadsword} alt="broadsword"></img>
                    <img className="gallery-photo" src={Chainwhip} alt="chainwhip"></img>
                    <img className="gallery-photo" src={Tornado} alt="tornado"></img>
                </div>
                <div>
                    <div className="iframe-container">
                        <iframe className="wushu-video" width="1280" height="720" src="https://www.youtube.com/embed/EhDlvlzPPhc" title="Adv CQ Ryan Huang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="iframe-container">
                        <iframe className="wushu-video" width="1280" height="720" src="https://www.youtube.com/embed/Y3QOLeLwii8" title="Adv N Trad Weapon Ryan Huang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="iframe-container">
                        <iframe className="wushu-video" width="1280" height="720" src="https://www.youtube.com/embed/GCo7SFNUbVg" title="Adv DS Ryan Huang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wushu;