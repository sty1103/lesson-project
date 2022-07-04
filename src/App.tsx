import React, { useState } from 'react';
import './App.scss';
import OpenSheetMusicDisplayContainer from './containers/OpenSheetMusicDisplayContainer';
import ControlPannelContainer from './containers/ControlPannelContainer';
import AppContext from './contexts/AppContext';
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import ChatContainer from './containers/ChatCotnainer';

function App() {
  const [ osmd, setOsmd ] = useState<OpenSheetMusicDisplay | null>(null);
  const [ activeMeasure, setActiveMeasure ] = useState(-1);

  const props = {
    osmd, setOsmd, activeMeasure, setActiveMeasure
  }
  
  return (
    <AppContext.Provider value={props}>
      <div className="App">
        <div className="left">
          <div className="inner">
            <OpenSheetMusicDisplayContainer />
            <ControlPannelContainer />
          </div>
        </div>

        <div className="right">
          <ChatContainer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
