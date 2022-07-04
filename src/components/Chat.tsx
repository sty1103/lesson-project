import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import styles from '../styles/Chat.module.scss';

const Chat: React.FC = () => {
  const { activeMeasure, setActiveMeasure } = useContext(AppContext);

  return (
    <section className={styles.main}>
      <div className={styles.opponent}>
        <div className={styles.profile}>
          <img src="/profile1.webp" alt="" />
          <span>Abbey</span>
        </div>
        
        <div className={styles.message}>
          <span className={styles.activeMeasure} onClick={() => clickActiveMeasure(3)}>3마디</span>
          <br/>
          <span className={styles.activeMeasure} onClick={() => clickActiveMeasure(8)}>8마디</span>
          <br/>
          <span className={styles.activeMeasure} onClick={() => clickActiveMeasure(14)}>14마디</span>
          <br/><br/>
          에서는 느리게 연주해 주세요.
        </div>
      </div>
    </section>
  )

  function clickActiveMeasure(measure: number) {
    if ( activeMeasure > 1 )
      return;

    const el = document.querySelector(`.measure${measure}.staff1`) as HTMLElement;
    const top = el.offsetTop - 30;
    
    if ( el ) {
      setActiveMeasure(measure - 1);
      document.querySelector('.App > .left')?.scrollTo({top: top, behavior: "smooth"})

      setTimeout(() => {
        setActiveMeasure(-1);
      }, 1500);
    }
  }
}

export default Chat;