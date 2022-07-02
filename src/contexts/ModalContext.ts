import { createContext } from 'react';

interface IModalContext {
  modal: boolean;
  setModal: Function;
}

const ModalContext = createContext<IModalContext>({ modal: false, setModal: () => {} });

export default ModalContext;