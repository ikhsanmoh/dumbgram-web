import { useState, useEffect } from 'react';
import logo from '../../assets/logo-dumbgram.png'
import Photos from '../../assets/Assets'
import Button from '../../components/button/Button'
import LoginModal from '../../components/modal/LoginModal'
import './LandingPage.css'

import RegistrationModal from '../../components/modal/RegistrationModal'

const LandingPage = () => {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegist, setModalRegist] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'user1',
      email: 'user',
      password: 'user'
    }
  ])

  useEffect(() => {
    if (users.length > 0) {
      console.log('Checking Registed Users...')
      console.table(users);
    }
  }, [users])

  const loginModalToggle = (e) => {
    setModalLogin(!modalLogin)
    console.log('Login Modal Toggle...')
  }

  const registModalToggle = (e) => {
    setModalRegist(!modalRegist)
    console.log('Regist Modal Toggle...')
  }

  const switchModalToggle = () => {
    console.log('Switch Modal...');
    setModalLogin(!modalLogin)
    setModalRegist(!modalRegist)
  }

  const addUser = (user) => {
    const id = Math.floor(Math.random() * 1000) + 1 // id maker
    const newUser = { id, ...user }
    setUsers(users => [...users, newUser])
  }

  return (
    <>
      {console.log('Rendering...')}
      <div className="container">
        <div className="wrapper">
          <div className="landing-page">
            <div className="flex-item">
              <div className="logo-dumbgram">
                <img src={logo} alt="" />
              </div>
              <div className="tagline">
                <h3>Share your best photos or videos</h3>
                <p>Join now, share your creations with another people and enjoy other creations.</p>
              </div>
              <div className="action">
                <Button clsName="btn btn-bg-main" id="login" label="Login" onClick={loginModalToggle} />
                <Button clsName="btn btn-bg-transparent" id="regist" label="Register" onClick={registModalToggle} />
              </div>
            </div>
            <div className="flex-item">
              <div className="gallery-wrapper">
                {
                  Photos.map(
                    (img, index) => <img className="gallery-items" key={index} src={img.file} alt={img.name}></img>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal switchModal={switchModalToggle} modalStat={modalLogin} modalClose={loginModalToggle} usersRegisted={users} />
      <RegistrationModal switchModal={switchModalToggle} modalStat={modalRegist} modalClose={registModalToggle} onAddUser={addUser} />
    </>
  )
}

export default LandingPage