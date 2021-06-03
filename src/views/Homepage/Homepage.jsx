import React from 'react'
import HomeHeader from '../../components/HomeHeader/HomeHeader.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './Homepage.scss'

const Homepage = () =>{
    return(
        <div className="Home-container">
            <Navbar sample={false} about={false}/>
            <HomeHeader />
        </div>
    )
}

export default Homepage