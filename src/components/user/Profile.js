import { Link, useParams } from 'react-router-dom'

import RoundedImage from '../frame/RoundedImage'

import Photos from '../../assets/Assets';
import iEdit from '../../assets/icons/edit-icon.png'

const src = Photos.find(p => p.name === 'img6')

const Profile = ({ owner, showEditButton }) => {

  //! Do conditional to check if id params is set
  //! Do conditional to check if id is not logged user
  //TODO: The goal is to render user profile or people profile based on id check

  let button
  if (owner) {
    button = (
      <div className="action">
        <button className="btn btn-bg-main">Message</button>
        <button className="btn btn-bg-dark">Unfollow</button>
      </div>
    )
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
          <RoundedImage image={src} size='200px' />
        </div>
        <div className="account">
          <h2>Lisa</h2>
          <p>@lalalisa</p>
        </div>
        {button}
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
    </div>
  )
}

Profile.defaultProps = {
  showEditButton: true
}

export default Profile
