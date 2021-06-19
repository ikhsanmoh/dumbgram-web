import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import UserProfile from '../profile/UserProfile'
import PeopleProfile from '../profile/PeopleProfiles'
import CreatePost from '../create-post/CreatePost';
import Feed from '../feed/Feed'
import Explore from '../explore/Explore';
import Messages from '../message/Mesagges'
import Chat from '../message/Chat'
import EditProfile from '../edit-profile/EditProfile';

import Notification from '../../components/modal/Notification';

import logo from '../../assets/logo-dumbgram.png'
import iBell from '../../assets/icons/bell-icon.png'
import iMsg from '../../assets/icons/paper-plane-icon.png'
import iSearch from '../../assets/icons/search-icon.png'
import iAdd from '../../assets/icons/add-icon.png'
import './UserPage.css'

const UserPage = () => {
  const [notifModal, setNotifModal] = useState(false);

  const notifModalToggle = (e) => {
    setNotifModal(!notifModal)
    console.log('Notif Modal Toggle...', notifModal)
  }

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

  return (
    <Router>
      <div className="user-page-container">
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
        <aside className="sidenav">
          <div className="logo-brand">
            <Link to='/'>
              <img src={logo} alt="logo-dumbgram" />
            </Link>
          </div>
          <div className="sidenav-wrapper">
            <Switch>
              <Route exact path="/">
                <UserProfile />
              </Route>
              <Route path="/edit-profile">
                <UserProfile showEditButton={false} />
              </Route>
              <Route path="/feed">
                <UserProfile />
              </Route>
              <Route path="/explore">
                <UserProfile />
              </Route>
              <Route path="/messages/">
                <Messages />
              </Route>
              <Route path="/create-post">
                <UserProfile />
              </Route>
              <Route path="/zayn">
                <PeopleProfile />
              </Route>
            </Switch>
          </div>
        </aside>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Feed />
            </Route>
            <Route path="/edit-profile">
              <EditProfile />
            </Route>
            <Route exact path="/feed">
              <Feed />
            </Route>
            <Route exact path="/zayn">
              <Feed title='Zayn, Feed' />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/messages">
              <Chat />
            </Route>
            <Route path="/messages/1">
              <Chat personalChat={['Hello Lisa']} />
            </Route>
            <Route exact path="/create-post">
              <CreatePost />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default UserPage
