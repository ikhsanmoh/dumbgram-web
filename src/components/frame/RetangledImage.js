const RetangledImage = ({ image, size }) => {

  const sizes = {
    width: size,
    height: 'auto'
  }

  return (
    <div className="retangled" style={sizes}>
      <img src={image.file} alt={image.name} />
    </div>
  )
}

export const BackgroundBase = ({ image, size }) => {
  const img = {
    backgroundImage: `url(${image.file})`,
  }

  const sizes = {
    width: size,
    height: size
  }
  return (
    <div className="retangled" style={sizes}>
      <div className="background-image" style={img}></div>
    </div>
  )
}

RetangledImage.defaultProps = {
  image: {},
  size: '100%'
}

BackgroundBase.defaultProps = {
  image: {},
  size: '100%'
}

export default RetangledImage
