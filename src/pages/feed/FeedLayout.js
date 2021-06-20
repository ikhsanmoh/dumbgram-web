import { Link } from 'react-router-dom';
import { useState } from 'react';

import RoundedImage from '../../components/frame/RoundedImage'
import RetangledImage from '../../components/frame/RetangledImage';
import Feed from '../../components/post/Feed'

import fakeFeeds from '../../fake-data/fakeFeeds'

import iLike from "../../assets/icons/love-icon.png"
import iComment from "../../assets/icons/comment-icon.png"
import iMsg from "../../assets/icons/paper-plane-icon.png"
import './FeedLayout.css'

import FeedDetail from '../../components/post/FeedDetail'

const FeedLayout = ({ title }) => {
  const [detailModal, setDetailModal] = useState(false);
  const [feedData, setFeedData] = useState(false)

  const detailModalToggle = (obj) => {
    console.log('Detail Modal Toggle...');
    setDetailModal(!detailModal)
    setFeedData(obj)
  }

  return (
    <div>
      <h1>{title}</h1>
      <div className="feeds-wrapper">
        {fakeFeeds !== 'undefined' && fakeFeeds.length > 0 ?
          fakeFeeds.map(
            (feed, index) => (
              <Feed key={index} feed={feed} onClick={detailModalToggle} />
            )
          ) : <h2>No Feed Available</h2>}
      </div>
      <FeedDetail modalStat={detailModal} modalClose={detailModalToggle} feedData={feedData} />
    </div >
  )
}

FeedLayout.defaultProps = {
  title: 'Feed'
}

export default FeedLayout