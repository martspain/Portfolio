import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './About.scss'

const About = () =>{
    return(
        <>
            <Navbar sample={false} about={true}/>
            <h1>About Me</h1>
        </>
    )
}

export default About