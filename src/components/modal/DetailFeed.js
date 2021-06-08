import { useState } from 'react'
import { Link } from 'react-router-dom'

import { PhotoCircle } from '../../assets/Assets';
import iLike from "../../assets/icons/love-icon.png"
import iComment from "../../assets/icons/comment-icon.png"
import iMsg from "../../assets/icons/paper-plane-icon.png"

import Modal from './Modal';

import './DetailFeed.css';

const DetailFeed = ({ modalStat, modalClose, postData }) => {
  return (
    <>
      <Modal modalStat={modalStat} modalClose={modalClose}>
        <div className="feed-detail-wrapper">
          <div className="close-modal" onClick={modalClose}>X</div>
          <div className="detail-left">
            <img src={postData} alt="Img" />
          </div>
          <div className="detail-right">
            <div className="row-1">
              <div className="profile-photo-small">
                <img src={PhotoCircle[0].file} alt="" />
              </div>
              <div className="info">
                <Link onClick={modalClose} to='/zayn'>
                  <h4>zayn</h4>
                </Link>
                <p>To Begin Again..</p>
              </div>
            </div>
            <div className="row-2">
              <div className="people">
                <div className="profile-photo-small">
                  <img src={PhotoCircle[1].file} alt="" />
                </div>
                <div className="info">
                  <h4>abdul_h</h4>
                  <p>Nice Place</p>
                </div>
              </div>
              <div className="people">
                <div className="profile-photo-small">
                  <img src={PhotoCircle[2].file} alt="" />
                </div>
                <div className="info">
                  <h4>egi_lol</h4>
                  <p>Good Vibe</p>
                </div>
              </div>
            </div>
            <div className="row-3">
              <div className="actions">
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
              <div className="likes">126.100 Like</div>
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

export default DetailFeed