import { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { API, setAuthToken } from '../../config/api'
import Modal from './Modal';
import './FormsModal.css'

const LoginModal = ({ switchModal, modalStat, modalClose }) => {
  const [state, dispatch] = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

      const body = JSON.stringify({
        email,
        password
      })

      const response = await API.post("/login", body, config)

      if (response.status === 200) {
        setAuthToken(response.data.data.user.token)
        dispatch({
          type: 'LOGIN',
          payload: response.data.data.user
        })
        alert('Login success!')
        modalClose()
      }

      setEmail('')
      setPassword('')
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }

  return (
    <>
      <Modal modalStat={modalStat} modalClose={modalClose}>

        <div className="form-modal">
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
        </div>
      </Modal>
    </>
  )
}

LoginModal.defaultProps = {
  modalStat: false,
  switchModal: () => console.log('The switchModal method hasnt defined yet'),
}

export default LoginModal
