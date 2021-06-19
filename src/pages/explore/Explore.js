import Photos from '../../assets/Assets'
import iFollowedUser from '../../assets/photo-prof.png'

const Explore = () => {
  return (
    <div>
      <h1>Expolore</h1>
      <div className="posts-wrapper">

        {
          Photos.map(
            (img, index) => (
              <div key={index} className="card">
                <div className="thumbnail">
                  <img src={img.file} alt={img.name} />
                </div>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Explore
