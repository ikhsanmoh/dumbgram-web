import iLike from "../../assets/icons/love-icon.png"
import iComment from "../../assets/icons/comment-icon.png"
import iMsg from "../../assets/icons/paper-plane-icon.png"

import './FeedAction.css'

const FeedAction = ({ likeEvent, commentEvent, messageEvent, size }) => {

  const sizes = {
    width: size,
    height: size
  }

  return (
    <div className="feed-action-wrapper">
      <div className="like" style={sizes}>
        <img className="icons" src={iLike} alt="icon" onClick={likeEvent} />
      </div>
      <div className="comment" style={sizes}>
        <img className="icons" src={iComment} alt="icon" onClick={commentEvent} />
      </div>
      <div className="message" style={sizes}>
        <img className="icons" src={iMsg} alt="icon" onClick={messageEvent} />
      </div>
    </div>
  )
}

FeedAction.defaultProps = {
  size: '20px',
  likeEvent: () => alert('Like is Clicked'),
  commentEvent: () => alert('Comment is Clicked'),
  messageEvent: () => alert('Message is Clicked')
}

export default FeedAction