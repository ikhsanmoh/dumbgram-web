import { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import './OldModal.css'

import Modal from './Modal';

const LoginModal = ({ switchModal, modalStat, modalClose, usersRegisted }) => {
  const [state, dispatch] = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()

    let auth = false;
    auth = usersRegisted.find(user => user.email === email && user.password === password)

    if (auth) {
      dispatch({
        type: 'LOGIN',
        payload: { ...auth }
      })
      alert('Login success!')
      modalClose()
    } else {
      alert('Login Unsuccessful, Email atau Password salah!')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <>
      <Modal modalStat={modalStat} modalClose={modalClose}>
        <h1>Login</h1>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Login" className="btn btn-bg-main" />
        </form>
        <p>
          Don't have an account ? Klik
          <b>
            <a
              id='regist'
              href='?'
              onClick={(e) => {
                e.preventDefault()
                switchModal(e.target.id)
              }}
            > Here
          </a>
          </b>
        </p>
      </Modal>
    </>
  )
}

LoginModal.defaultProps = {
  modalStat: false,
  switchModal: () => console.log('The switchModal method hasnt defined yet'),
}

export default LoginModal
