import React, { useState } from 'react';
import './App.scss';
import OpenSheetMusicDisplayContainer from './containers/OpenSheetMusicDisplayContainer';
import ControlPannelContainer from './containers/ControlPannelContainer';
import AppContext from './contexts/AppContext';
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';

function App() {
  const [ osmd, setOsmd ] = useState<OpenSheetMusicDisplay | null>(null);
  
  return (
    <AppContext.Provider value={{osmd, setOsmd}}>
      <div className="App">
        <div className="left">
          <div className="inner">
            <OpenSheetMusicDisplayContainer />
            <ControlPannelContainer />
          </div>
        </div>

        <div className="right">
          Chat
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
