import { createContext } from 'react';

interface IModalContext {
  modalShow: boolean;
  setModalShow: Function;
}

const ModalContext = createContext<IModalContext>({ modalShow: false, setModalShow: () => {} });

export default ModalContext;