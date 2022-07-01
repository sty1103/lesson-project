import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import React, { useEffect, useState } from 'react';
import { TMeasures } from '../containers/ControlPannelContainer';
import styles from '../styles/ControlPannel.module.scss';
import ModalContainer from '../containers/ModalContainer';

/*
  부모 요소가 relative이어야 하고,
  악보가 형제 요소이어야 동작한다.
*/

interface ControlPannelProps {
  calMeasurePosition: Function;
}

const ControlPannel: React.FC<ControlPannelProps> = ({ calMeasurePosition }: ControlPannelProps) => {
  const [ measures, setMeasures ] = useState<TMeasures>([]);

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
                  top: `${staff.top}px`,
                  left: `${staff.left}px`,
                  width: `${staff.width}px`,
                  height: `${staff.height}px`
                }}
                onClick={() => clickMeasure(i, j)}>
                </div>
            )
          })
        })
      }
      <ModalContainer />
    </div>
  )

  function clickMeasure(measure: number, staff: number) {
    console.log( measure, staff );
  }
}

export default ControlPannel;