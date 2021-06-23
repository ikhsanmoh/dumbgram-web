import './Frame.css'

const RoundedImage = ({ image, size, zoom }) => {
  const img = {
    backgroundImage: `url(${image.file})`,
  }

  const sizes = {
    width: size,
    height: size,
    backgroundSize: zoom
  }

  return (
    <div className="rounded" style={sizes}>
      <div className="outline">
        <div className="image" style={img}></div>
      </div>
    </div>
  )
}

RoundedImage.defaultProps = {
  image: {},
  size: '100px',
  zoom: '120%'
}

export default RoundedImage
