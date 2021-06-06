import LandingPage from './components/landing-page/LandingPage'
import './App.css';

import { UserContextProvider } from './context/userContext'

function App() {
  return (
    <UserContextProvider>
      <div className="container">
        <LandingPage />
      </div>
    </UserContextProvider>
  );
}

export default App;