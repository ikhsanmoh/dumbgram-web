import ReactModal from 'react-modal';

import './Modal.css';

ReactModal.setAppElement('#root')

const Modal = ({ children, modalStat, modalClose }) => {
  return (
    <div>
      <ReactModal
        isOpen={modalStat}
        onRequestClose={modalClose}
        className="modal"
        overlayClassName="Overlay"
      >
        {children}
      </ReactModal>
    </div>
  )
}

Modal.defaultProps = {
  modalStat: false,
  children: 'This is a reusable Modal.',
  modalClose: () => alert('The modalClose method is hasnt defined yet!')
}

export default Modal
