import { Link } from 'react-router-dom'
import { PhotoCircle } from '../../assets/Assets'
import './Messages.css'

const Messages = () => {
  return (
    <div className="messages-wrapper">
      <Link to='/messages/1'>
        <div className="people-chat">
          <div className="column-1">
            <img src={PhotoCircle[1].file} alt="" />
          </div>
          <div className="column-2">
            <h4>egi_lol</h4>
            <p>Hello Lisa</p>
          </div>
        </div>
      </Link>
      <div className="people-chat">
        <div className="column-1">
          <img src={PhotoCircle[2].file} alt="" />
        </div>
        <div className="column-2">
          <h4>neach_lover</h4>
          <p>Hello Lisa, when do you go to the beach</p>
        </div>
      </div>
      <div className="people-chat">
        <div className="column-1">
          <img src={PhotoCircle[3].file} alt="" />
        </div>
        <div className="column-2">
          <h4>zayn</h4>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Messages