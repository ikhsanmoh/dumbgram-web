import { Link } from 'react-router-dom'

import RetangledImage from '../frame/RetangledImage';
import RoundedImage from '../frame/RoundedImage';
import { BackgroundBase } from '../frame/RetangledImage';
import Comments from './Comments'
import Comment from './Comment';
import FeedAction from './FeedAction'

import { PhotoCircle } from '../../assets/Assets';
import iLike from "../../assets/icons/love-icon.png"
import iComment from "../../assets/icons/comment-icon.png"
import iMsg from "../../assets/icons/paper-plane-icon.png"

import Modal from '../modal/Modal';

import fakeComments from '../../fake-data/fakeComments'

import './FeedDetail.css';

const FeedDetail = ({ modalStat, modalClose, feedData }) => {

  //! Fetch comments by given feed id here

  return (
    <>
      <Modal modalStat={modalStat} modalClose={modalClose}>
        <div className="feed-detail-wrapper">
          <div className="close-modal" onClick={modalClose}>X</div>
          <div className="detail-left">
            <BackgroundBase image={feedData?.image} />
          </div>
          <div className="detail-right">
            <div className="row-1">
              <div className="profile-photo-small">
                <RoundedImage image={feedData?.userImage} size='24px' />
              </div>
              <div className="info">
                <Link onClick={modalClose} to='/zayn'>
                  <h4>{feedData?.username}</h4>
                </Link>
                <p>To Begin Again..</p>
              </div>
            </div>
            <div className="row-2">
              <Comments comments={fakeComments[0]} />
            </div>
            <div className="row-3">
              <FeedAction size='15px' />
              <div className="likes">{feedData?.likes} Like</div>
              <div className="input-comment">
                <form onSubmit={e => e.preventDefault()}>
                  <input type="text" placeholder="Comment..." />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default FeedDetail