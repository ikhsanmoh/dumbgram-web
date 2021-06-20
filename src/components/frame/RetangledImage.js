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

RetangledImage.defaultProps = {
  image: {},
  size: '100%'
}

export default RetangledImage
