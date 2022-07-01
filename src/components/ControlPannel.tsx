import React from 'react';
import styles from '../styles/ControlPannel.module.scss';

/*
  부모 요소가 relative이어야 하고,
  악보가 형제 요소이어야 동작한다.
*/

const ControlPannel: React.FC = () => {
  return (
    <div className="controll-pannel">
      <div className="measure"></div>
    </div>
  )
}

export default ControlPannel;