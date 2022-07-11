import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';

interface IStaff {
  top: string;
  left: string;
  width: string;
  height: string;
  isNoted: boolean;
}

type TMeasure = IStaff[];

export type TMeasures = TMeasure[];

export default function useMeasurePosition(osmd: OpenSheetMusicDisplay) {
  const measures: TMeasures = [];
  // 마디 루프...
  osmd?.GraphicSheet.MeasureList.forEach((staffs) => {
    const measure: TMeasure = [];
    // 보표 루프...
    staffs.forEach((staff) => {
      const top     = (staff.PositionAndShape.AbsolutePosition.y * 10).toString() + 'px';
      const left    = (staff.PositionAndShape.AbsolutePosition.x * 10).toString() + 'px';
      const width   = (staff.PositionAndShape.Size.width * 10).toString() + 'px';
      const height  = "41";
      const isNoted = (Math.floor(Math.random() * 10)) % 3 === 0; // 임시 랜덤

      measure.push({ top, left, width, height, isNoted });
    });
    
    measures.push( measure );
  });

  return measures;
}