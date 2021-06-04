import React from 'react'
import HomeHeader from '../../components/HomeHeader/HomeHeader.jsx'
import HomeFooter from '../../components/HomeFooter/HomeFooter.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './Homepage.scss'

const Homepage = () =>{
    return(
        <div className="Home-container">
            <Navbar sample={false} about={false}/>
            <HomeHeader />
            <HomeFooter />
        </div>
    )
}

export default Homepage