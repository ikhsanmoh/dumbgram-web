import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { API } from '../../config/api'

import Header from '../../components/base-layout/Header'
import UserProfile from '../profile/UserProfile'
import PeopleProfileLayout from '../profile/PeopleProfileLayout'
import CreatePostLayout from '../create-post/CreatePostLayout';
import FeedLayout from '../feed/FeedLayout'
import ExploreLayout from '../explore/ExploreLayout';
import InboxLayout from '../message/InboxLayout'
import ChatHistoryLayout from '../message/ChatHistoryLayout'
import EditProfileLayout from '../edit-profile/EditProfileLayout';
import ProfileLayout from '../profile/ProfileLayout'

import Photos from '../../assets/Assets';

// import defautPhotoProfilers from '../../assets/no-pict.png'
import logo from '../../assets/logo-dumbgram.png'
import './UserPage.css'

const UserPage = () => {
  const [state] = useContext(UserContext)
  const [routes, setRoutes] = useState([])

  const [userPhotoProfile, setPhotoProfile] = useState('')
  const [countFollowers, setFollowers] = useState(0)
  const [countFollowedUsers, setFollowedUsers] = useState(0)
  const [countPosts, setPosts] = useState(0)
  const [userFullName, setFullName] = useState('')
  const [userEmail, setEmail] = useState('')
  const [userBio, setBio] = useState('')

  const loadProfile = async () => {
    try {
      if (state?.user !== undefined) {
        const response = await API.get('/users')
        const user = response.data.data.users.find(user => user.id == state.user.id)
        console.log("🚀 ~ file: UserPage.js ~ line 44 ~ loadProfile ~ user", user)

        const filename = user.image !== null ? user.username : 'no-pict'
        console.log("🚀 ~ file: UserPage.js ~ line 46 ~ loadProfile ~ filename", filename)
        const photoProfile = Photos.find(p => p.name == filename)

        setFullName(user.fullName)
        setEmail(user.email)
        setBio(user.bio)
        setPhotoProfile(photoProfile)

        loadFollowers()
        loadFollowed()
        loadPosts()
      }
    } catch (error) {
      console.log("🚀 ~ file: UserProfile.js ~ line 45 ~ loadProfile ~ error", error)
    }
  }

  // Load Total Followers
  const loadFollowers = async () => {
    try {
      const response = await API.get(`/followers/${state?.user?.id}`)
      console.log("🚀 ~ file: UserPage.js ~ line 119 ~ loadFollowers ~ response", response)
      if (response.status === 200) {
        const dataCount = response.data.data.followers.length
        setFollowers(dataCount)
      }
    } catch (err) {
      console.log("🚀 ~ file: UserProfile.js ~ line 63 ~ loadFollowers ~ err", err)
    }
  }

  // Load Total Followed Users
  const loadFollowed = async () => {
    try {
      const response = await API.get(`/following/${state?.user?.id}`)
      const dataCount = response.data.data.following.length
      setFollowedUsers(dataCount)
    } catch (err) {
      console.log(err)
    }
  }

  // Load Total Posts
  const loadPosts = async () => {
    try {
      const response = await API.get(`/feeds`)
      if (response.status === 200) {
        const myFeed = response.data.data.feeds.filter((feed) => feed.user.id === state?.user?.id);
        setPosts(myFeed.length)
      }
    } catch (err) {
      console.log("🚀 ~ file: UserProfile.js ~ line 84 ~ loadPosts ~ err", err)
    }
  }

  const updateRoutes = (data) => {
    console.log("🚀 ~ file: UserPage.js ~ line 66 ~ updateRoutes ~ data", data)
    const components = {
      UserProfile: <UserProfile userProfile={data} />
    }

    setRoutes([
      {
        path: '/',
        exact: true,
        sidebar: () => components.UserProfile,
        main: () => <FeedLayout />
      },
      {
        path: '/edit-profile',
        exact: true,
        sidebar: () => <UserProfile showEditButton={false} userProfile={data} />,
        main: () => <EditProfileLayout reloadProfile={loadProfile} />
      },
      {
        path: '/feed',
        exact: true,
        sidebar: () => components.UserProfile,
        main: () => <FeedLayout />
      },
      {
        path: '/explore',
        exact: true,
        sidebar: () => components.UserProfile,
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
        sidebar: () => components.UserProfile,
        main: () => <CreatePostLayout />
      },
      {
        path: '/profile/:id',
        exact: true,
        sidebar: () => <PeopleProfileLayout />,
        main: () => <FeedLayout />
      },
    ])
  }

  useEffect(() => {
    loadProfile()
  }, [])

  useEffect(() => {
    updateRoutes({
      userPhotoProfile,
      userFullName,
      userEmail,
      userBio,
      countFollowers,
      countFollowedUsers,
      countPosts
    })
  }, [
    userPhotoProfile,
    userFullName,
    userEmail,
    userBio,
    countFollowers,
    countFollowedUsers,
    countPosts
  ])

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
              {routes.map((route, index) => (
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
            {routes.map((route, index) => (
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
