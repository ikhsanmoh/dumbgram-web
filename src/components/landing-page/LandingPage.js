import './landing-page.css'
import logo from '../../assets/logo-dumbgram.png'
import Photos from '../../assets/Assets'
import Button from '../button/Button'

const LandingPage = () => {
  return (
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
            <Button class_name="btn btn-login" name="Login" />
            <Button class_name="btn btn-register" name="Register" />
          </div>
        </div>
        <div className="flex-item">
          <div className="gallery-wrapper">
            {
              Photos.map(
                (img, index) => <img className="gallery-items" key={index} src={img.file} alt={img.name}></img>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage