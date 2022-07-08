import React, { useRef, useCallback, useContext } from 'react';
import OpenSheetMusicDisplay from '../components/OpenSheetMusicDisplay';
import { OpenSheetMusicDisplay as OSMD } from 'opensheetmusicdisplay';
import AppContext from '../contexts/AppContext';

const OpenSheetMusicDisplayContainer: React.FC = () => {
  const file = "Beethoven_AnDieFerneGeliebte.xml";
  const { setOsmd } = useContext(AppContext);
  const divRef = useRef<HTMLDivElement>(null);

  const loadScore = useCallback(() => {
    const options = {
      autoResize: true,
      drawTitle: true
    }

    const osmd = new OSMD(divRef.current as HTMLElement, options);
    osmd.load(file).then(() => {
      osmd.render();
      setOsmd(() => osmd);
    });
  }, []);

  const props = { loadScore, divRef };

  return (
    <OpenSheetMusicDisplay { ...props } />
  )
}

export default OpenSheetMusicDisplayContainer;