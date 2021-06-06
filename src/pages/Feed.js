import { Link } from 'react-router-dom';

import Photos from '../assets/Assets'
import iFollowedUser from '../assets/photo-prof.png'

import iLike from "../assets/icons/love-icon.png"
import iComment from "../assets/icons/comment-icon.png"
import iMsg from "../assets/icons/paper-plane-icon.png"
import './feed.css'

const Feed = ({ title }) => {
  const modalHandler = () => {

  }
  return (
    <div>
      <h1>{title}</h1>
      <div className="posts-wrapper">

        {
          Photos.map(
            (img, index) => (
              <div key={index} className="card">
                <div onClick={modalHandler} className="thumbnail">
                  <img src={img.file} alt={img.name} />
                </div>
                <div className="info">
                  <Link className="user" to='/zayn'>
                    <div className="user-img">
                      <img src={iFollowedUser} alt="" />
                    </div>
                    <div className="username">
                      <h4>zayn</h4>
                    </div>
                  </Link>
                  <div className="action">
                    <div className="like">
                      <img className="icons" src={iLike} alt="icon" />
                    </div>
                    <div className="comment">
                      <img className="icons" src={iComment} alt=" icon" />
                    </div>
                    <div className="message">
                      <img className="icons" src={iMsg} alt=" icon" />
                    </div>
                  </div>
                </div>
                <div className="likes">126.100 Like</div>
              </div>
            )
          )
        }

        <div className="card small">
          <div className="thumbnail">
            <img src={Photos[0].file} alt="" />
          </div>
          <div className="info">
            <div className="user">
              <div className="user-img">img</div>
              <div className="username">zayn</div>
            </div>
            <div className="action">
              <div className="like">
                <img className="icons" src={iLike} alt="icon" />
              </div>
              <div className="comment">
                <img className="icons" src={iComment} alt=" icon" />
              </div>
              <div className="message">
                <img className="icons" src={iMsg} alt=" icon" />
              </div>
            </div>
          </div>
          <div className="likes">126.100 Like</div>
        </div>
      </div>
    </div>
  )
}

Feed.defaultProps = {
  title: 'Feed'
}

export default Feed
