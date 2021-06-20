import './EditProfileLayout.css'

const EditProfileLayout = () => {
  return (
    <div>
      <h1>Edit Profile</h1>
      <div className="edit-profile-wrapper">
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <button className="btn btn-bg-main">Upload Photos</button>
          </div>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <textarea name="" id="caption" placeholder="Caption" cols="30" rows="10"></textarea>
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
