import { useState } from 'react'
import './modal.css'

const RegistrationModal = ({ switch_modal, close_modal, onAddUser }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    onAddUser({ email, name, username, password })

    setEmail('')
    setName('')
    setUsername('')
    setPassword('')
  }

  return (
    <>
      <div className="modal-overlay" onClick={close_modal}>
      </div>
      <div className="modal">
        <h1>Registration</h1>
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
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Register" className="btn btn-bg-main" />
        </form>
        <p>
          Already have an account ? Klik
          <b>
            <a
              id='login'
              href="?"
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

export default RegistrationModal
