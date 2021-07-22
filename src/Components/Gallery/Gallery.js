import React from 'react'
import imgOne from '../../assets/IMG_6857.jpg'
import imgTwo from '../../assets/IMG_5460.jpg'
import imgThree from '../../assets/IMG_0694.JPG'
import imgFour from '../../assets/IMG_0475.JPG'
import imgFive from '../../assets/beach.jpg'
import imgSix from '../../assets/sf.jpg'
import imgSeven from '../../assets/anr.jpg'
import imgEight from '../../assets/aa.jpg'
import imgNine from '../../assets/rnb.jpg'
import imgTen from '../../assets/IMG_2885.JPG'
import imgEleven from '../../assets/IMG_9553.jpg'
import imgTwelve from '../../assets/IMG_2319.jpg'
import imgThirteen from '../../assets/IMG_2168.jpg'
import imgFourteen from '../../assets/keyboard.jpg'
import './Gallery.css'

class Gallery extends React.Component {
    render() {
        return(
            <div>
                <p>Here's some photos of me that I think are cool (all taken by my good friend <a id="melinda" href="https://www.instagram.com/photos.bymeli/" target="_blank">Melinda</a>):</p>
                <img src={imgOne} className="gallery-photo"></img>
                <img src={imgTwo} className="gallery-photo"></img>
                <br></br>
                <img src={imgThree} className="gallery-photo"></img>
                <br></br>
                <img src={imgFour} className="gallery-photo"></img>
                <p>Some photos of me and friends:</p>
                <img src={imgFive} className="gallery-photo"></img>
                <img src={imgSix} className="gallery-photo"></img>
                <img src={imgSeven} className="gallery-photo"></img>
                <img src={imgEight} className="gallery-photo"></img>
                <img src={imgNine} className="gallery-photo"></img>
                <br></br>
                <img src={imgTen} className="gallery-photo"></img>
                <p>Some photos of me and family:</p>
                <img src={imgEleven} className="gallery-photo"></img>
                <br></br>
                <img src={imgTwelve} className="gallery-photo"></img>
                <br></br>
                <img src={imgThirteen} className="gallery-photo"></img>
                <p>and most importantly, my keyboard:</p>
                <img src={imgFourteen} className="gallery-photo"></img>
                <br></br>
                <div className="video-container">
                    <div className="video-responsive">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GYliAdxLe-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;