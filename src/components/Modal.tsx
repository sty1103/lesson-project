import React from 'react';
import styles from '../styles/Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>

      <div className={styles.modal}>
        <div className={styles.header}>
          마디 노트
          <button className={styles.close}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className={styles.body}>
          마디 노트 내용
        </div>

        <div className={styles.footer}>
          마디 노트 푸터
        </div>
      </div>
    </div>
  )
}

export default Modal;