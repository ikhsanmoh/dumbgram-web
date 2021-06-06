import { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import './modal.css'

const LoginModal = ({ switch_modal, close_modal, users_registed }) => {
  const [state, dispatch] = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()

    let auth = false;
    auth = users_registed.find(user => user.email === email && user.password === password)

    if (auth) {
      dispatch({
        type: 'LOGIN',
        payload: { ...auth }
      })
      alert('Login success!')
      close_modal()
    } else {
      alert('Login Unsuccessful, Email atau Password salah!')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className="modal-overlay" onClick={close_modal}>
      </div>
      <div className="modal">
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
                switch_modal(e.target.id)
              }}
            > Here
          </a>
          </b>
        </p>
      </div>
    </>
  )
}

export default LoginModal
