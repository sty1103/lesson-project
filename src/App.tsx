import React from 'react';
import './App.scss';
import OpenSheetMusicDisplayContainer from './containers/OpenSheetMusicDisplayContainer';
import ControlPannelContainer from './containers/ControlPannelContainer';

function App() {
  return (
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
  );
}

export default App;
