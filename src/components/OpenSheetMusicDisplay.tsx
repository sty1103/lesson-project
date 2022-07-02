import React, { useEffect, useState, useRef } from 'react';

interface IOpenSheetMusicDisplayProps {
  loadScore: Function;
  divRef: React.RefObject<HTMLDivElement>;
}

const OpenSheetMusicDisplay: React.FC<IOpenSheetMusicDisplayProps> = ({ loadScore, divRef }) => {
  useEffect(() => {
    loadScore();
  }, []);

  return (<div ref={divRef} />);
}

export default OpenSheetMusicDisplay;