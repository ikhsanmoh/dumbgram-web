import './button.css'

const Button = ({ label, id, clsName, onClick }) => {
  return <button id={id} className={clsName} onClick={onClick}>{label}</button>
}

Button.defaultProps = {
  id: '',
  clsName: 'btn',
  label: 'Button',
  onClick: () => console.log('onClick Button hasnt defined yet!')
}

export default Button