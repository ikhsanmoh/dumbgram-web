import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from '../../components/base-layout/Header'

import UserProfile from '../profile/UserProfile'
import PeopleProfile from '../profile/PeopleProfiles'
import CreatePost from '../create-post/CreatePost';
import Feed from '../feed/Feed'
import Explore from '../explore/Explore';
import Messages from '../message/Mesagges'
import Chat from '../message/Chat'
import EditProfile from '../edit-profile/EditProfile';

import logo from '../../assets/logo-dumbgram.png'
import './UserPage.css'

const ROUTES = [
  {
    path: '/',
    exact: true,
    sidebar: () => <UserProfile />,
    main: () => <Feed />
  },
  {
    path: '/edit-profile',
    exact: true,
    sidebar: () => <UserProfile showEditButton={false} />,
    main: () => <EditProfile />
  },
  {
    path: '/feed',
    exact: true,
    sidebar: () => <UserProfile />,
    main: () => <Feed />
  },
  {
    path: '/explore',
    exact: true,
    sidebar: () => <UserProfile />,
    main: () => <Explore />
  },
  {
    path: '/messages',
    exact: true,
    sidebar: () => <Messages />,
    main: () => <Chat />
  },
  {
    path: '/messages/1',
    exact: true,
    sidebar: () => <Messages />,
    main: () => <Chat personalChat={['Hello Lisa']} />
  },
  {
    path: '/create-post',
    exact: true,
    sidebar: () => <UserProfile />,
    main: () => <CreatePost />
  },
  {
    path: '/zayn',
    exact: true,
    sidebar: () => <PeopleProfile />,
    main: () => <Feed title='Zayn, Feed' />
  },
]

const UserPage = () => {
  return (
    <Router>
      <div className="user-page-container">
        <Header />
        <aside className="sidenav">
          <div className="logo-brand">
            <Link to='/'>
              <img src={logo} alt="logo-dumbgram" />
            </Link>
          </div>
          <div className="sidenav-wrapper">
            <Switch>
              {ROUTES.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={route.sidebar}
                />
              ))}
            </Switch>
          </div>
        </aside>
        <main className="main">
          <Switch>
            {ROUTES.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={route.main}
              />
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default UserPage
