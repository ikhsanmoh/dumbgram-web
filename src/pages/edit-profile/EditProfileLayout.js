import { API } from '../../config/api'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext'

import './EditProfileLayout.css'

const EditProfileLayout = ({ reloadProfile }) => {
  const [state] = useContext(UserContext)
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()

      let formData = {}

      if (fullName != '') formData.fullName = fullName
      if (username != '') formData.username = username
      if (bio != '') formData.bio = bio

      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

      const body = JSON.stringify(formData)

      const response = await API.patch("/user/" + state?.user?.id, body, config)

      if (response.status === 200) {
        alert('Update Success!')
        setFullName('')
        setUsername('')
        setBio('')
        reloadProfile();
      }

    } catch (err) {
      alert(err.response.message)
    }
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <div className="edit-profile-wrapper">
        <form onSubmit={onSubmitHandler}>
          <div>
            <div className="btn btn-bg-main">Upload Photos</div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <textarea
              id="caption"
              placeholder="Biograpghy"
              cols="30" rows="10"
              value={bio}
              onChange={e => setBio(e.target.value)}
            >
            </textarea>
          </div>
          <div>
            <input className="btn btn-bg-main" type="submit" value="Save" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfileLayout
