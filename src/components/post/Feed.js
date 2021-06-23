import { Link } from 'react-router-dom';
import { API, setAuthToken } from '../../config/api'
import { useState, useEffect } from 'react';

import RoundedImage from '../frame/RoundedImage'
import RetangledImage from '../frame/RetangledImage';
import FeedAction from './FeedAction';

import iLike from "../../assets/icons/love-icon.png"
import iComment from "../../assets/icons/comment-icon.png"
import iMsg from "../../assets/icons/paper-plane-icon.png"

import './Feed.css'

const Feed = ({ feed, onClick, reloadFeeds }) => {

  const addLike = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

      const body = JSON.stringify({
        id: feed.id
      })

      const response = await API.post("/like", body, config)

      if (response.status === 200) {
        alert('Liked')
        reloadFeeds()
      }
    } catch (err) {
      console.log(err);
    }
  }

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
          <FeedAction likeEvent={addLike} />
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
