import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

import iHome from '../../assets/icons/home-icon.png'
import iCompass from '../../assets/icons/compass-icon.png'
import iExit from '../../assets/icons/exit-icon.png'

import './SideNavigation.css'

const SideNavigation = () => {
  const [state, dispatch] = useContext(UserContext)

  const destroySession = () => {
    dispatch({
      type: 'LOGOUT',
      payload: {}
    })
  }
  return (
    <div className="nav-wrapper">
      <div className="navigation">
        <Link className="feed" to="/feed">
          <div className="icon">
            <img src={iHome} alt="icon" />
          </div>
          <div className="label">Feed</div>
        </Link>
        <Link className="explore" to='/explore'>
          <div className="icon">
            <img src={iCompass} alt="icon" />
          </div>
          <div className="label">
            Explore
          </div>
        </Link>
      </div>
      <div className="logout" onClick={destroySession}>
        <div className="icon">
          <img src={iExit} alt="icon" />
        </div>
        <div className="label">
          Logout
        </div>
      </div>
    </div>
  )
}

export default SideNavigation
