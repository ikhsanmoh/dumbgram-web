import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from '../../components/base-layout/Header'

import UserProfile from '../profile/UserProfile'
import PeopleProfileLayout from '../profile/PeopleProfileLayout'
import CreatePostLayout from '../create-post/CreatePostLayout';
import FeedLayout from '../feed/FeedLayout'
import ExploreLayout from '../explore/ExploreLayout';
import InboxLayout from '../message/InboxLayout'
import ChatHistoryLayout from '../message/ChatHistoryLayout'
import EditProfileLayout from '../edit-profile/EditProfileLayout';

import logo from '../../assets/logo-dumbgram.png'
import './UserPage.css'

const ROUTES = [
  {
    path: '/',
    exact: true,
    sidebar: () => <UserProfile />,
    main: () => <FeedLayout />
  },
  {
    path: '/edit-profile',
    exact: true,
    sidebar: () => <UserProfile showEditButton={false} />,
    main: () => <EditProfileLayout />
  },
  {
    path: '/feed',
    exact: true,
    sidebar: () => <UserProfile />,
    main: () => <FeedLayout />
  },
  {
    path: '/explore',
    exact: true,
    sidebar: () => <UserProfile />,
    main: () => <ExploreLayout />
  },
  {
    path: '/messages',
    exact: true,
    sidebar: () => <InboxLayout />,
    main: () => <ChatHistoryLayout />
  },
  {
    path: '/messages/1',
    exact: true,
    sidebar: () => <InboxLayout />,
    main: () => <ChatHistoryLayout personalChat={['Hello Lisa']} />
  },
  {
    path: '/create-post',
    exact: true,
    sidebar: () => <UserProfile />,
    main: () => <CreatePostLayout />
  },
  {
    path: '/zayn',
    exact: true,
    sidebar: () => <PeopleProfileLayout />,
    main: () => <FeedLayout title='Zayn, Feed' />
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
