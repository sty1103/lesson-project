import React, { useEffect, useState } from 'react';
import { TMeasures } from '../containers/ControlPannelContainer';
import styles from '../styles/ControlPannel.module.scss';
import ModalContainer from '../containers/ModalContainer';
import ModalContext from '../contexts/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from '../components/Button';

/*
  부모 요소가 relative이어야 하고,
  악보가 형제 요소이어야 동작한다.

  *** 독립적으로 동작하도록 개선 필요
*/

interface ControlPannelProps {
  calMeasurePosition: Function;
}

interface IModalHeader {
  measure: number;
  staff: number;
}

const ControlPannel: React.FC<ControlPannelProps> = ({ calMeasurePosition }: ControlPannelProps) => {
  const [ measures, setMeasures ] = useState<TMeasures>([]);
  const [ modal, setModal ] = useState(false);
  const [ modalHeader, setModalHeader ] = useState<IModalHeader>({ measure:0, staff:0 });

  useEffect(() => {
    setMeasures(() => calMeasurePosition());
  }, [calMeasurePosition]);

  return (
    <div className={styles[`control-pannel`]}>
      {
        measures.map((measure, i) => {
          return measure.map((staff, j) => {
            return (
              <div 
                key={j} 
                className={styles[`measure`]}
                style={{
                  top: `${staff.top}`,
                  left: `${staff.left}`,
                  width: `${staff.width}`,
                  height: `${staff.height}`
                }}
                onClick={() => clickMeasure(i+1, j+1)}
              ></div>
            )
          })
        })
      }

      <ModalContext.Provider value={{ modal, setModal }}>
        <ModalContainer>
          <div className='modal-header'>
            마디 {modalHeader.measure}, 보표 {modalHeader.staff} 노트
            <button className='modal-close' onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className='modal-body'>
            <div className={`${styles['item']} ${styles.teacher}`}>
              <div className={styles['item-header']}>
                <img src='/profile1.webp' alt="profile1" />
                <span>Abbey</span>
                <span>2022.07.01</span>
              </div>
              <div className={styles['item-body']}>
                조표에 #이 있을 경우, 마지막 # 바로 위음이 장조를 결정합니다.
              </div>
            </div>

            <div className={styles['item']}>
              <div className={styles['item-header']}>
                <img src='/profile2.jpeg' alt="profile1" />
                <span>Mark</span>
                <span>2022.07.01</span>
              </div>
              <div className={styles['item-body']}>
                연주 영상 업로드해주실 수 있나요?
              </div>
            </div>

            <div className={`${styles['item']} ${styles.teacher}`}>
              <div className={styles['item-header']}>
                <img src='/profile1.webp' alt="profile1" />
                <span>Abbey</span>
                <span>2022.07.02</span>
              </div>
              <div className={styles['item-body']}>
                영상 참고 바랍니다.
                <video controls>
                  <source src='/piano_play.mov'
                          type="video/mp4" />
                  브라우저가 비디오 재생을 지원히지 않습니다.
                </video>
              </div>
            </div>
          </div>

          <div className='modal-footer'>
            <Button>
              글쓰기
            </Button>
          </div>
        </ModalContainer>
      </ModalContext.Provider>
    </div>
  )

  function clickMeasure(measure: number, staff: number) {
    setModal(() => true);
    setModalHeader(() => ({measure, staff}));
  }

  function closeModal() {
    setModal(() => false);
  }
}

export default ControlPannel;