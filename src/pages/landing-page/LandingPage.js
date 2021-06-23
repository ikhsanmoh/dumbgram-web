import { useState, useEffect } from 'react';
import logo from '../../assets/logo-dumbgram.png'
import { LandingPagePhoto } from '../../assets/Assets'
import Button from '../../components/button/Button'
import LoginModal from '../../components/modal/LoginModal'
import './LandingPage.css'

import RegistrationModal from '../../components/modal/RegistrationModal'

const LandingPage = () => {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegist, setModalRegist] = useState(false);

  const loginModalToggle = (e) => {
    setModalLogin(!modalLogin)
  }

  const registModalToggle = (e) => {
    setModalRegist(!modalRegist)
  }

  const switchModalToggle = () => {
    setModalLogin(!modalLogin)
    setModalRegist(!modalRegist)
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="landing-page">
            <div className="flex-item">
              <div className="logo-dumbgram">
                <img src={logo} alt="" />
              </div>
              <div className="tagline">
                <h3>Share your best photos or videos</h3>
                <p>Join now, share your creations with another people and enjoy other creations.</p>
              </div>
              <div className="action">
                <Button clsName="btn btn-bg-main" id="login" label="Login" onClick={loginModalToggle} />
                <Button clsName="btn btn-bg-transparent" id="regist" label="Register" onClick={registModalToggle} />
              </div>
            </div>
            <div className="flex-item">
              <div className="gallery-wrapper">
                {
                  LandingPagePhoto.map(
                    (img, index) => <img className="gallery-items" key={index} src={img.file} alt={img.name}></img>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal switchModal={switchModalToggle} modalStat={modalLogin} modalClose={loginModalToggle} />
      <RegistrationModal switchModal={switchModalToggle} modalStat={modalRegist} modalClose={registModalToggle} />
    </>
  )
}

export default LandingPage