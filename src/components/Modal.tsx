import React, { useContext } from 'react';
import '../styles/Modal.scss';
import ModalContext from '../contexts/ModalContext';

interface ModalProps {
  children: JSX.Element | JSX.Element[];
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { modalShow, setModalShow } = useContext(ModalContext);

  return (
    <>
      <div className={`modal-background ${modalShow ? 'show':''}`} onClick={closeModal}></div>
      <div className={`modal ${modalShow ? 'show':''}`}>
        {children}
      </div>
    </>
  )
  
  function closeModal() {
    setModalShow(() => false);
  }
}

export default Modal;