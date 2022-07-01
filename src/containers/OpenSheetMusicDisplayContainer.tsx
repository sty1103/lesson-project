import React, { useRef, useCallback } from 'react';
import OpenSheetMusicDisplay from '../components/OpenSheetMusicDisplay';
import { OpenSheetMusicDisplay as OSMD } from 'opensheetmusicdisplay';

const OpenSheetMusicDisplayContainer: React.FC = () => {
  const file = "Beethoven_AnDieFerneGeliebte.xml";
  const divRef = useRef<HTMLDivElement>(null);

  const loadScore = useCallback(() => {
    const options = {
      autoResize: true,
      drawTitle: true
    }

    const osmd = new OSMD(divRef.current as HTMLElement, options);
    osmd.load(file).then(() => {
      osmd.render();
      console.log( osmd.GraphicSheet.MeasureList[0][0].PositionAndShape.Size.width );
      // console.log( osmd.GraphicSheet.MeasureList[0][0].staffEntries[0] );
      // console.log( osmd.GraphicSheet.Title.PositionAndShape.AbsolutePosition )
    });
  }, []);

  const props = { loadScore, divRef };

  return (
    <OpenSheetMusicDisplay { ...props } />
  )
}

export default OpenSheetMusicDisplayContainer;