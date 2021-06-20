import RetangledImage from '../../components/frame/RetangledImage';

import Feeds from '../../fake-data/Feeds'

const Explore = () => {
  return (
    <div>
      <h1>Expolore</h1>
      <div className="posts-wrapper">

        {
          Feeds.map(
            (feed, index) => (
              <div key={index} className="card">
                <div className="thumbnail">
                  <RetangledImage image={feed.image} />
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
