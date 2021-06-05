import './button.css'

const Button = ({ label, id, class_name, on_click }) => {
  return <button id={id} className={class_name} onClick={on_click}>{label}</button>
}

Button.defaultProps = {
  label: 'Button',
  class_name: 'btn',
  on_click: () => console.log('Button Clicked')
}

export default Button