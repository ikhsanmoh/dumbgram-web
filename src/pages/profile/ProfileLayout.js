import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Profile from "../../components/user/Profile"

const ProfileLayout = () => {
  const { id } = useParams()
  const [idParams, setId] = useState(id)

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
