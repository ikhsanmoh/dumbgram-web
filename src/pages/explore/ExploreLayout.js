import RetangledImage from '../../components/frame/RetangledImage';

import fakeFeeds from '../../fake-data/fakeFeeds'

const ExploreLayout = () => {
  return (
    <div>
      <h1>Expolore</h1>
      <div className="feeds-wrapper">
        {
          fakeFeeds.map(
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

export default ExploreLayout