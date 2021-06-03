import './button.css'

const Button = ({ name, class_name }) => {
  return <button className={class_name}>{name}</button>
}

Button.defaultProps = {
  name: 'Button',
  class_name: 'btn',
}

export default Button