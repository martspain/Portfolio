import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './Samples.scss'

const Samples = () =>{
    return(
        <>
            <Navbar sample={true} about={false}/>
            <h1>Samples</h1>
        </>
    )
}

export default Samples