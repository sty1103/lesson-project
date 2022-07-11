import React from 'react';
import Modal from '../components/Modal';

interface ModalContainerProps {
  children: JSX.Element|JSX.Element[];
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  return (
    <Modal>
      {children}
    </Modal>
  );
}

export default ModalContainer;