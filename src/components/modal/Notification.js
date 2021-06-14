import Modal from './Modal';
import { PhotoCircle } from '../../assets/Assets'
import customModalStyles from './NotificationModal.module.css'
import './Notification.css'

const Notification = ({ modalStat, modalClose }) => {
  console.log('Notif Run...', modalStat);
  console.log(customModalStyles);
  return (
    <>
      <Modal customStyles={customModalStyles} modalStat={modalStat} modalClose={modalClose}>
        <div className="notif-wrapper">
          <div className="notif-comment">
            <div className="notif-left">
              <img src={PhotoCircle[2].file} alt="" />
            </div>
            <div className="notif-right">
              <h4>abdul_h</h4>
              <p><span className="white-text">Komentar: </span>Nice Place</p>
            </div>
          </div>
          <div className="notif-comment">
            <div className="notif-left">
              <img src={PhotoCircle[1].file} alt="" />
            </div>
            <div className="notif-right">
              <h4>egi_lol</h4>
              <p><span className="white-text">Komentar: </span>Good Vibe</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Notification
