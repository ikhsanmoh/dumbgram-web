import { useState, useEffect } from 'react';
import logo from '../../assets/logo-dumbgram.png'
import Photos from '../../assets/Assets'
import Button from '../button/Button'
import RegistrationModal from '../modal/RegistrationModal'
import LoginModal from '../modal/LoginModal'
import './landing-page.css'

const LandingPage = () => {
  const [users, setUsers] = useState([])
  const [ModalComponent, setModalComponent] = useState('')

  useEffect(() => {
    if (users.length > 0) {
      console.info('useEffect Run')
      console.table(users)
      setModalComponent('')
    }
  }, [users])

  const addUser = (user) => {
    const id = Math.floor(Math.random() * 1000) + 1 // id maker
    const newUser = { id, ...user }
    setUsers(users => [...users, newUser])
  }

  const closeModal = () => {
    console.log("Modal Closed")
    setModalComponent('')
  }

  const modalEventHandler = (e) => {
    console.log('Button Clicked')
    if ('login' === e?.target?.id || 'login' === e)
      setModalComponent(<LoginModal switch_modal={modalEventHandler} close_modal={closeModal} users_registed={users} />)
    else if ('regist' === e?.target?.id || 'regist' === e)
      setModalComponent(<RegistrationModal switch_modal={modalEventHandler} close_modal={closeModal} onAddUser={addUser} />)
    else
      console.error('Button ID Invalid!')
  }

  return (
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
            <Button class_name="btn btn-bg-main" id="login" label="Login" on_click={modalEventHandler} />
            <Button class_name="btn btn-bg-transparent" id="regist" label="Register" on_click={modalEventHandler} />
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

      {ModalComponent}

    </div>
  )
}

export default LandingPage