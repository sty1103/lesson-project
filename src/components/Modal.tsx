import React, { useContext } from 'react';
import '../styles/Modal.scss';
import ModalContext from '../contexts/ModalContext';

interface ModalProps {
  children?: JSX.Element | JSX.Element[];
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { modal, setModal } = useContext(ModalContext);

  
  return (
    <>
      <div className={`modal-background ${modal ? 'show':''}`} onClick={closeModal}></div>
      <div className={`modal ${modal ? 'show':''}`}>
        {children}
      </div>
    </>
  )
  
  function closeModal() {
    setModal(() => false);
  }
}

export default Modal;