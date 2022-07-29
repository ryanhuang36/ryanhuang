import React from 'react'
import sf2 from '../../assets/sf2.jpg';
import tennis from '../../assets/tennis.JPG';
import desert from '../../assets/desert.JPG';
import sf from '../../assets/sf.JPG';
import anr from '../../assets/anr.JPG';
import chungi from '../../assets/chungi.JPG';
import picnic from '../../assets/picnic.HEIC';
import presidio from '../../assets/presidio.HEIC';
import rma from '../../assets/rma.JPG';
import rra from '../../assets/rra.HEIC';
import './Gallery.css'

class Gallery extends React.Component {
    render() {
        return(
            <div>
                <p>Here's some photos of me and friends that I think are cool (many taken by my good friend <a id="melinda" href="https://www.instagram.com/photos.bymeli/" target="_blank" rel="noreferrer">Melinda</a>):</p>
                <div>
                    <img className="gallery-photo photosection1" src={sf2} alt="sf2"></img>
                    <img className="gallery-photo photosection1" src={desert} alt="desert"></img>
                </div>
                <div>
                    <img className="gallery-photo photosection2" src={tennis} alt="tennis"></img>
                    <img className="gallery-photo photosection2" src={picnic} alt="picnic"></img>
                    <img className="gallery-photo photosection2" src={presidio} alt="presidio"></img>
                </div>
                <div>
                    <img className="gallery-photo" src={sf} alt="sf"></img>
                    <img className="gallery-photo" src={anr} alt="anr"></img>
                    <img className="gallery-photo" src={rma} alt="rma"></img>
                </div>
                <div>
                    <img className="gallery-photo" src={rra} alt="rra"></img>
                    <img className="gallery-photo" src={chungi} alt="chungi"></img>
                </div>
            </div>
        )
    }
}

export default Gallery;