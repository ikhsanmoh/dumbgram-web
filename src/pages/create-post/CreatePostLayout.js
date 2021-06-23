import { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext'

import './CreatePostLayout.css';

const CreatePostLayout = () => {

  const createPostHandler = async (e) => {
    try {
      e.preventDefault();

    } catch (error) {

    }
  }

  return (
    <div>
      <h1>Create Post</h1>
      <div className="create-post-wrapper">
        <form onSubmit={createPostHandler}>
          <div>
            <button className="btn btn-bg-main">Upload Photos or Videos</button>
          </div>
          <div>
            <textarea name="" id="caption" placeholder="Caption" cols="30" rows="10"></textarea>
          </div>
          <div>
            <input className="btn btn-bg-main" type="submit" value="Upload" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePostLayout
