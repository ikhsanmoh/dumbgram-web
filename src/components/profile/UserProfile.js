import { Link } from 'react-router-dom'

import iEdit from '../../assets/icons/edit-icon.png'
import iHome from '../../assets/icons/home-icon.png'
import iCompass from '../../assets/icons/compass-icon.png'
import iExit from '../../assets/icons/exit-icon.png'
import Photos from '../../assets/Assets';

import './profiles.css';

const UserProfile = () => {

  const src = Photos.find(p => p.name === 'img6')
  console.log(src)
  const photoProfile = {
    backgroundImage: `url(${src.file})`
  }

  return (
    <div className="user-profile-container">
      <div className="edit-icon">
        <img src={iEdit} alt="icon" />
      </div>
      <div className="profile">
        <div className="photo">
          <div className="border">
            <div className="circle" style={photoProfile}></div>
          </div>
        </div>
        <div className="account">
          <h2>Lisa</h2>
          <p>@lalalisa</p>
        </div>
      </div>
      <div className="info">
        <div className="posts">
          <h4>Posts</h4>
          <p>200</p>
        </div>
        <div className="followers">
          <h4>Followers</h4>
          <p>35.2 M</p>
        </div>
        <div className="following">
          <h4>Following</h4>
          <p>0</p>
        </div>
      </div>
      <p>Rapper in Black Pink, Brand Ambasador Penshoppe</p>
      <div className="navigation">
        <Link className="feed" to="/feed">
          <div className="icon">
            <img src={iHome} alt="icon" />
          </div>
          <div className="label">Feed</div>
        </Link>
        <Link className="explore" to='/explore'>
          <div className="icon">
            <img src={iCompass} alt="icon" />
          </div>
          <div className="label">
            Explore
          </div>
        </Link>
      </div>
      <div className="logout">
        <div className="icon">
          <img src={iExit} alt="icon" />
        </div>
        <div className="label">
          Logout
        </div>
      </div>
    </div>
  )
}

export default UserProfile
