import { Link } from 'react-router-dom';
import { useState } from 'react';

import RoundedImage from '../../components/frame/RoundedImage'
import RetangledImage from '../../components/frame/RetangledImage';

import Feeds from '../../fake-data/Feeds'

import iLike from "../../assets/icons/love-icon.png"
import iComment from "../../assets/icons/comment-icon.png"
import iMsg from "../../assets/icons/paper-plane-icon.png"
import './Feed.css'

import DetailFeed from '../../components/modal/DetailFeed'

const Feed = ({ title }) => {
  const [detailModal, setDetailModal] = useState(false);
  const [postData, setPostData] = useState('')

  const detailModalToggle = (e) => {
    console.log('Detail Modal Toggle...');
    setDetailModal(!detailModal)
    setPostData(e)
  }

  return (
    <div>
      <h1>{title}</h1>
      <div className="posts-wrapper">
        {
          Feeds.map(
            (feed, index) => (
              <div key={index} className="card">
                <div className="thumbnail" onClick={() => detailModalToggle(feed.image)}>
                  <RetangledImage image={feed.image} />
                </div>
                <div className="info">
                  <Link className="user" to='/zayn'>
                    <div className="user-img">
                      <RoundedImage image={feed.userImage} size='25px' />
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
                <div className="likes">{feed.likes} Like</div>
              </div>
            )
          )
        }
      </div>
      <DetailFeed modalStat={detailModal} modalClose={detailModalToggle} postData={postData} />
    </div >
  )
}

Feed.defaultProps = {
  title: 'Feed'
}

export default Feed
