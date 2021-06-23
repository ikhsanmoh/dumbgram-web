import { Link } from 'react-router-dom'
import { API } from '../../config/api'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/userContext'

import RoundedImage from '../../components/frame/RoundedImage'
import iHome from '../../assets/icons/home-icon.png'
import iCompass from '../../assets/icons/compass-icon.png'
import iExit from '../../assets/icons/exit-icon.png'

import iEdit from '../../assets/icons/edit-icon.png'

import './Profiles.css';

const UserProfile = ({ showEditButton, userProfile }) => {
  console.log("🚀 ~ file: UserProfile.js ~ line 16 ~ UserProfile ~ userProfile", userProfile)
  const [state, dispatch] = useContext(UserContext)

  const destroySession = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null
    })
  }

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
          <RoundedImage image={userProfile?.userPhotoProfile} size='200px' zoom='250%' />
          {console.log("🚀 ~ file: UserProfile.js ~ line 44 ~ UserProfile ~ UserProfile?.userPhotoProfile", UserProfile?.userPhotoProfile)}
        </div>
        <div className="account">
          <h2>{userProfile?.userFullName}</h2>
          <p>{userProfile?.userEmail}</p>
        </div>
      </div>
      <div className="info">
        <div className="posts">
          <h4>Posts</h4>
          <p>{userProfile?.countPosts}</p>
        </div>
        <div className="followers">
          <h4>Followers</h4>
          <p>{userProfile?.countFollowers}</p>
        </div>
        <div className="following">
          <h4>Following</h4>
          <p>{userProfile?.countFollowedUsers}</p>
        </div>
      </div>
      <p>{userProfile?.userBio}</p>
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