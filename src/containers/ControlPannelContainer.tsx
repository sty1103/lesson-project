import React, { useContext, useCallback } from 'react';
import ControlPannel from '../components/ControlPannel';
import AppContext from '../contexts/AppContext';

interface IStaff {
  top: string;
  left: string;
  width: string;
  height: string;
  isNoted: boolean;
}

type TMeasure = IStaff[];
export type TMeasures = TMeasure[];

const ControlPannelContainer: React.FC = () => {
  const { osmd } = useContext(AppContext);

  const calMeasurePosition = useCallback(() => {
    const measures: TMeasures = [];
    // 마디 루프...
    osmd?.GraphicSheet.MeasureList.forEach((staffs) => {
      const measure: TMeasure = [];
      // 보표 루프...
      staffs.forEach((staff) => {
        const top   = (staff.PositionAndShape.AbsolutePosition.y * 10).toString() + 'px';
        const left  = (staff.PositionAndShape.AbsolutePosition.x * 10).toString() + 'px';
        const width = (staff.PositionAndShape.Size.width * 10).toString() + 'px';
        const height = "41";
        const isNoted = (Math.floor(Math.random() * 10)) % 3 === 0; // 임시 랜덤

        measure.push({ top, left, width, height, isNoted });
      });
      
      measures.push( measure );
    });

    return measures;
  }, [osmd])

  const props = { calMeasurePosition };

  return (
    <ControlPannel { ...props } />
  )
}

export default ControlPannelContainer;