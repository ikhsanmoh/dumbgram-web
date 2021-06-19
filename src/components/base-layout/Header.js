import { useState } from 'react'
import { Link } from 'react-router-dom'
import Notification from '../../components/modal/Notification';

import iBell from '../../assets/icons/bell-icon.png'
import iMsg from '../../assets/icons/paper-plane-icon.png'
import iAdd from '../../assets/icons/add-icon.png'
import iSearch from '../../assets/icons/search-icon.png'

const inputSearchStyle = {
  backgroundImage: `url(${iSearch})`
}

const createPostStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '5px 10px',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center',
  background: 'linear-gradient(90deg, #4DD4F7 0%, #9090FB 36.46%, #FF6B81 71.35%, #FBDF63 100%)'
}

const Header = () => {
  const [notifModal, setNotifModal] = useState(false);

  const notifModalToggle = (e) => {
    setNotifModal(!notifModal)
    console.log('Notif Modal Toggle...', notifModal)
  }

  return (
    <header className="header">
      <div className="search">
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Search" style={inputSearchStyle} />
        </form>
      </div>
      <div className="notification" onClick={notifModalToggle}>
        <img className="icon" src={iBell} alt="icon" />
        <Notification modalStat={notifModal} modalClose={notifModalToggle} />
      </div>
      <Link to="/messages">
        <div className="massages">
          <img className="icon" src={iMsg} alt="icon" />
        </div>
      </Link>
      <div className="create-post">
        <Link style={createPostStyle} to='/create-post'>
          <img className="icon" src={iAdd} alt="add" />
          <span style={{ marginLeft: '10px' }}>
            Create Post
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header
