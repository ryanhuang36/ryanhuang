import React from 'react'
import './Keeb.css'
import BongoCat from '../../assets/bongo-cat-typing.gif'

class Keeb extends React.Component {
    render() {
        return(
            <div className="keeb">
                <p>༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ</p>
                <p>thocc :)</p>
                <h3 style={{marginBottom: 0}}>Specs</h3>
                <ul style={{display: "block"}}>
                    <li>
                        <b>Keyboard:</b> Think6.5 v2
                    </li>
                    <li>
                        <b>Plate material:</b> FR4
                    </li>
                    <li>
                        <b>Keycaps:</b> SA Mizu
                    </li>
                    <li>
                        <b>Switches:</b> Zealios v2 78g
                    </li>
                    <li>
                        <b>Switches:</b> Krytox 205g0
                    </li>
                    <li>
                        <b>Stabilizers:</b> Durock
                    </li>
                </ul>
                <iframe className="keeb-video" width="1280" height="720" src="https://www.youtube.com/embed/GYliAdxLe-A" title="Think6.5 V2 Sound Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img src={BongoCat} alt="meow" width="220" height="300"></img>
            </div>
        )
    }
}

export default Keeb;