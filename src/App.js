import { useContext } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserContext } from './context/userContext'
import LandingPage from './pages/landing-page/LandingPage'
import UserPage from './pages/user-pages/UserPage'
import './App.css';

function App() {
  const [state] = useContext(UserContext)

  return (
    <>
      {state.isLogin ? <UserPage /> : <LandingPage />}
    </>
  );
}

export default App;