import React, { useEffect, useState, useRef } from 'react';

interface Props {
  loadScore: Function;
  divRef: React.RefObject<HTMLDivElement>;
}

const OpenSheetMusicDisplay: React.FC<Props> = ({ loadScore, divRef }: Props) => {
  useEffect(() => {
    loadScore();
  }, []);

  return (<div ref={divRef} />);
}

export default OpenSheetMusicDisplay;