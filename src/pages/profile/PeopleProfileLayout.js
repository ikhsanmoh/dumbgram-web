import iZayn from '../../assets/photo-prof.png'
import iHome from '../../assets/icons/home-icon.png'
import iCompass from '../../assets/icons/compass-icon.png'
import iExit from '../../assets/icons/exit-icon.png'

import { Link } from 'react-router-dom'
const PeopleProfileLayout = ({ id }) => {

  const myStyle = {
    width: '60%',
    margin: 'auto',
    marginBottom: '20px'
  }

  const mb = {
    marginBottom: '20px'
  }

  return (
    <div className="user-profile-container">
      <div className="profile">
        <div className="photo" style={myStyle}>
          <img src={iZayn} alt="profile-img" />
        </div>
        <div className="account" style={mb}>
          <h2>Zayn Malik</h2>
          <p>@zayn</p>
        </div>
        <div className="profil-action">
          <button className="btn btn-bg-main">Message</button>
          <button className="btn btn-bg-dark">Unfollow</button>
        </div>
      </div>
      <div className="info">
        <div className="posts">
          <h4>Posts</h4>
          <p>123</p>
        </div>
        <div className="followers">
          <h4>Followers</h4>
          <p>23.2 M</p>
        </div>
        <div className="following">
          <h4>Following</h4>
          <p>45</p>
        </div>
      </div>
      <p>Nobody is Listening Out Now!</p>
      <small>www.inzayn.com</small>
    </div>
  )
}

export default PeopleProfileLayout
