import { PhotoCircle } from '../../assets/Assets'


import './Chat.css';

const Chat = ({ personalChat }) => {
  let displayedChat = ''

  console.log(personalChat);

  if (!personalChat) {
    displayedChat = (<h1 className="empty-chat">No Message</h1>)
  } else {
    displayedChat = (
      <>
        <div className="chat-history">
          <div className="chat">
            <div className="photo-profile-circle">
              <img src={PhotoCircle[1].file} alt="" />
            </div>
            <p className="text">{personalChat[0]}</p>
          </div>
        </div>
        <div className="input-message">
          <form onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Send Message" />
          </form>
        </div>
      </>
    )
  }

  return (
    <div className="chat-wrapper">
      {displayedChat}
    </div>
  )
}

Chat.defaultProps = {
  personalChat: false
}

export default Chat
