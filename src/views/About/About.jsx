import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import HomeFooter from '../../components/HomeFooter/HomeFooter.jsx'
import ESPDF from '../../assets/files/ESCV2021.pdf'
import ENPDF from '../../assets/files/ENCV2021.pdf'
import './About.scss'

const About = () =>{
    return(
        <div className="About-container">
            <Navbar sample={false} about={true}/>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="About-title">About Me</h1>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center About-item">
                    <div className="col-md-6 col-6">
                        <h1>Education</h1>
                        <ul>
                            <li>Guatemalan Bilingual School (2006 - 2018)</li>
                            <li>University of the Valley of Guatemala (2019 - 2023)</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-6">
                        <h1>Interests</h1>
                        <ul>
                            <li>Videogame Design & Programming & Management & Testing</li>
                            <li>Web Design & Development</li>
                            <li>Playing Guitar</li>
                            <li>Playing Volleyball</li>
                            <li>Working Out</li>
                            <li>Playing Videogames</li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center About-item">
                    <div className="col-md-6 col-6">
                        <a href={ESPDF} download="MartinEspana_ESResume.pdf">
                            <button type="button" className="btn btn-primary">Download Resume (Spanish)</button>
                        </a>
                    </div>
                    <div className="col-md-6 col-6">
                        <a href={ENPDF} download="MartinEspana_ENResume.pdf">
                            <button type="button" className="btn btn-primary">Download Resume (English)</button>
                        </a>      
                    </div>
                </div>
            </div>
            <HomeFooter />
        </div>
    )
}

export default About