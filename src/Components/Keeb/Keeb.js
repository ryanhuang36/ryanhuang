import React from 'react'
import './Keeb.css'
import BongoCat from '../../assets/bongo-cat-typing.gif'

class Keeb extends React.Component {
    render() {
        return(
            <div className="keeb">
                <p>thocc :)</p>
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/GYliAdxLe-A" title="Think6.5 V2 Sound Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img src={BongoCat} alt="meow" width="220" height="300"></img>
            </div>
        )
    }
}

export default Keeb;