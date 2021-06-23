import { useContext, useEffect } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserContext } from './context/userContext'
import LandingPage from './pages/landing-page/LandingPage'
import UserPage from './pages/user-pages/UserPage'

import './App.css';

import { API, setAuthToken } from './config/api'

if (localStorage.access_token) {
  // Set Header every time web get refreshed
  setAuthToken(localStorage.access_token)
}

function App() {
  const [state, dispatch] = useContext(UserContext)
  console.log("🚀 ~ file: App.js ~ line 18 ~ App ~ state", state)

  useEffect(() => {
    if (localStorage.access_token) {
      tokenValidation()
    }
  }, [])

  const tokenValidation = async () => {
    try {
      const response = await API.get('/check-auth')

      if (response.status === 200) {
        let payload = response.data.data.user
        payload.token = localStorage.access_token

        dispatch({
          type: "USER_SUCCESS",
          payload
        })
      }
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 401) {
        dispatch({
          type: "AUTH_ERROR"
        })
      }
    }
  }

  return (
    <>
      {state.isLogin ? <UserPage /> : <LandingPage />}
    </>
  );
}

export default App;