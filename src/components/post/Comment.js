import RoundedImage from '../frame/RoundedImage'

import './Comment.css'

const Comment = ({ image, username, comment }) => {
  return (
    <div className="comment">
      <div className="people">
        <div className="profile-photo-small">
          <RoundedImage image={image} size='24px' />
        </div>
        <div className="info">
          <h4>{username}</h4>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment
