import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import UserProfile from '../components/profile/UserProfile'
import PeopleProfile from '../components/profile/PeopleProfiles'
import CreatePost from './CreatePost';
import Feed from './Feed'
import Explore from './Explore';
import Messages from './message/Mesagges'
import Chat from './message/Chat'


import logo from '../assets/logo-dumbgram.png'
import iBell from '../assets/icons/bell-icon.png'
import iMsg from '../assets/icons/paper-plane-icon.png'
import iSearch from '../assets/icons/search-icon.png'
import iAdd from '../assets/icons/add-icon.png'
import './userPage.css'

const UserPage = () => {

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
          <div className="notification">
            <img className="icon" src={iBell} alt="icon" />
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
              <Route exact path="/feed">
                <UserProfile />
              </Route>
              <Route exact path="/explore">
                <UserProfile />
              </Route>
              <Route path="/messages/">
                <Messages />
              </Route>
              <Route exact path="/create-post">
                <UserProfile />
              </Route>
              <Route exact path="/zayn">
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
