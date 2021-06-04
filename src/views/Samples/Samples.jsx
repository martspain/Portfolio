import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'
import HomeFooter from '../../components/HomeFooter/HomeFooter.jsx'
import pickImg from '../../assets/images/pickle.png'
import calcImg from '../../assets/images/calc.png'
import './Samples.scss'

const Samples = () => {
  return (
    <div className="Sample-container">
      <Navbar sample about={false} />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <h1 className="Sample-title">Samples</h1>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-6">
            <Link to="/calculator" className="Sample-subtitle">
              <h1>Calculator</h1>
              <img className="Sample-preview" alt="Calculator" src={calcImg} />
            </Link>
          </div>
          <div className="col-md-6 col-6">
            <Link to="/pickle" className="Sample-subtitle">
              <h1>Css Only Lab</h1>
              <img className="Sample-preview" alt="Pickle" src={pickImg} />
            </Link>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  )
}

export default Samples
