import { Link } from 'react-router-dom';

import RoundedImage from '../frame/RoundedImage'
import RetangledImage from '../frame/RetangledImage';
import FeedAction from './FeedAction';

import iLike from "../../assets/icons/love-icon.png"
import iComment from "../../assets/icons/comment-icon.png"
import iMsg from "../../assets/icons/paper-plane-icon.png"

import './Feed.css'

const Feed = ({ feed, onClick }) => {
  return feed && (
    <div className="card" >
      <div className="thumbnail" onClick={() => onClick(feed)}>
        <RetangledImage image={feed.image} />
      </div>
      <div className="info">
        <Link className="user" to={`/profile/${feed.id}`}>
          <div className="user-img">
            <RoundedImage image={feed.userImage} size='25px' />
          </div>
          <div className="username">
            <h4>{feed.username}</h4>
          </div>
        </Link>
        <div>
          <FeedAction />
        </div>
      </div>
      <div className="likes">{feed.likes} Like</div>
    </div>
  )
}

Feed.defaultProps = {
  feed: false,
  onClick: () => {
    alert('Feed is clicked, but have no effect.')
  },
}

export default Feed
