import React from 'react'
import linkedin from '../../assets/images/linkedin.png'
import mail from '../../assets/images/mail.png'
import whats from '../../assets/images/whats.png'
import cat from '../../assets/images/newCat.png'
import './HomeFooter.scss'

const HomeFooter = () =>{
    return(
        <div className="Footer-container">
            <div className="Footer-header">
                <h1 className="Footer-title">Contact Me</h1> 
            </div>
            <div className="Footer-footer">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-1 Footer-contact-itemI">
                            <img className="Footer-icon" alt="LinkedIn" src={linkedin}></img>
                        </div>
                        <div className="col-5 Footer-contact-itemL">
                            <h1 className="Footer-contact-item-title">
                                LinkedIn
                            </h1>
                        </div>
                        <div className="col-5 Footer-contact-itemR">
                            <a className="Footer-contact-item-link" href="https://www.linkedin.com/in/martín-españa/">
                                https://www.linkedin.com/in/martín-españa/
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-1 Footer-contact-itemI">
                            <img className="Footer-icon" alt="Mail" src={mail}></img>
                        </div>
                        <div className="col-5 Footer-contact-itemL">
                            <h1 className="Footer-contact-item-title">
                                Gmail
                            </h1>
                        </div>
                        <div className="col-5 Footer-contact-itemR">
                            <h1 className="Footer-contact-item-link">
                                martineduardoer00@gmail.com
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-1 Footer-contact-itemI">
                            <img className="Footer-icon" alt="Github" src={cat}></img>
                        </div>
                        <div className="col-5 Footer-contact-itemL">
                            <h1 className="Footer-contact-item-title">
                                GitHub
                            </h1>
                        </div>
                        <div className="col-5 Footer-contact-itemR">
                            <a className="Footer-contact-item-link" href="https://github.com/martspain">
                                https://github.com/martspain
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-1 Footer-contact-itemI">
                            <img className="Footer-icon" alt="Phone" src={whats}></img>
                        </div>
                        <div className="col-5 Footer-contact-itemL">
                            <h1 className="Footer-contact-item-title">
                                WhatsApp
                            </h1>
                        </div>
                        <div className="col-5 Footer-contact-itemR">
                            <h1 className="Footer-contact-item-title">
                                +(502) 4143 1595
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter