import React from 'react'
import Navbar from '../../../../components/Navbar/Navbar.jsx'
import './Pickle.scss'

const Pickle = () => {
  return (
    <>
      <Navbar sample={false} about={false} />
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-8">
            <div id="pickleRick" className="sample-body">
              <div className="pickle">

                <div className="reflection">
                  <div className="mouth">
                    <div className="tongue" />
                    <div className="toothOne" />
                    <div className="toothTwo" />
                    <div className="toothThree" />
                    <div className="toothFour" />
                    <div className="toothFive" />
                    <div className="toothSix" />
                    <div className="toothSeven" />
                    <div className="toothEight" />
                    <div className="toothNine" />
                    <div className="toothTen" />
                    <div className="toothEleven" />
                    <div className="toothTwelve" />
                  </div>
                </div>

                <div className="eyebrow" />

                <div className="leftEye">
                  <div className="leftIris" />
                </div>

                <div className="rightEye">
                  <div className="rightIris" />
                </div>

                <div className="nose" />
                <div className="eyeWrinkleOne" />
                <div className="eyeWrinkleTwo" />
                <div className="mouthWrinkleOne" />
                <div className="mouthWrinkleTwo" />
                <div className="pointOne" />
                <div className="pointTwo" />
                <div className="pointThree" />
                <div className="pointFour" />
                <div className="pointFive" />
                <div className="pointSix" />
              </div>
              <div className="button-holder">
                <div>
                  <a className="custom-link" href="https://static.wikia.nocookie.net/rickandmorty/images/4/41/Pickle_rick_transparent_edgetrimmed.png/revision/latest?cb=20200324115455">Imagen Original</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pickle
