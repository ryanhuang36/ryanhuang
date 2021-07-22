import React from 'react'
import './Resume.css'
import resume from '../../assets/Ryan_Resume.pdf'

class Resume extends React.Component {
    render() {
        return(
            <div>
                <iframe id="resume" src={resume} class="resume-pdf" frameborder="0" scolling="no">
                </iframe>
            </div>
        )
    }
}

export default Resume;