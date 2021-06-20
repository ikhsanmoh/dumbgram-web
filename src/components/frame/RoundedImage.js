import './Frame.css'

const RoundedImage = ({ image, size }) => {
  const img = {
    backgroundImage: `url(${image.file})`,
  }

  const sizes = {
    width: size,
    height: size
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
  size: '100px'
}

export default RoundedImage
