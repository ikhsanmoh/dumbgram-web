import { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { API } from '../../config/api'
import { Link, useParams } from 'react-router-dom'
import Profile from "../../components/user/Profile"

const ProfileLayout = () => {
  const [state] = useContext(UserContext)

  console.log('Profile', state);

  const { id } = useParams()
  const [idParams, setId] = useState(id)

  const [followers, setFollowers] = useState(0)
  const [followed, setFollowed] = useState(0)
  const [posts, setPosts] = useState(0)

  const loadProfile = async () => {

    try {
      const response = await API.get('/feeds')
      // setFeeds(response.data.data.feeds)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(id);

  let isLoggedUser

  // if (idParams === 1) {
  //   isLoggedUser = true
  // } else {
  //   isLoggedUser = false
  // }

  return (
    <>
      {id == 1 && <Profile owner={true} />}
      {id == 2 && <Profile />}
    </>
  )
}

export default ProfileLayout
