import React from 'react'
import ProfPic from '../../assets/images/profile.jpeg'
import './HomeHeader.scss'

const HomeHeader = () => {
  return (
    <div className="Home-header-container container">
      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-2 col-6 Home-header-pic">
          <img className="Home-header-prof" src={ProfPic} alt="Profile" />
        </div>
        <div className="col-md-8 col-sm-5 col-6 Home-header-screen" data-testid="ProgramSkillTest">
          <div className="row justify-content-center align-items-center">
            <div className="col-11 Home-header-screen-liq">
              <h1 className="Home-header-computer-title">Programming Skills</h1>
              <div className="row justify-content-center">
                <div className="col-md-6 col-12">
                  <ul className="Home-header-custom-ul">
                    <li className="Home-header-computer-item">Javascript</li>
                    <li className="Home-header-computer-item">CSS/SCSS</li>
                    <li className="Home-header-computer-item">HTML</li>
                    <li className="Home-header-computer-item">Python</li>
                  </ul>
                </div>
                <div className="col-md-6 col-12">
                  <ul className="Home-header-custom-ul">
                    <li className="Home-header-computer-item">Java</li>
                    <li className="Home-header-computer-item">Kotlin</li>
                    <li className="Home-header-computer-item">C/C++/C#</li>
                    <li className="Home-header-computer-item">SQL/NOSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
