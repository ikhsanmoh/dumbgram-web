import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

import RoundedImage from '../../components/frame/RoundedImage'

import iEdit from '../../assets/icons/edit-icon.png'
import iHome from '../../assets/icons/home-icon.png'
import iCompass from '../../assets/icons/compass-icon.png'
import iExit from '../../assets/icons/exit-icon.png'
import Photos from '../../assets/Assets';

import './Profiles.css';

const UserProfile = ({ showEditButton }) => {
  const [state, dispatch] = useContext(UserContext)

  const destroySession = () => {
    dispatch({
      type: 'LOGOUT',
      payload: {}
    })
  }

  const src = Photos.find(p => p.name === 'img6')

  return (
    <div className="user-profile-container">
      {
        showEditButton &&
        <Link to='/edit-profile'>
          <div className="edit-icon">
            <img src={iEdit} alt="icon" />
          </div>
        </Link>
      }
      <div className="profile">
        <div className="photo">
          <RoundedImage image={src} size='200px' />
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
      <div className="logout" onClick={destroySession}>
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

UserProfile.defaultProps = {
  showEditButton: true
}

export default UserProfile
