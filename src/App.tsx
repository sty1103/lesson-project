import React from 'react';
import './App.scss';
import OpenSheetMusicDisplayContainer from './containers/OpenSheetMusicDisplayContainer';

function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="inner">
          <OpenSheetMusicDisplayContainer />
          <div className="controll-pannel">
            <div className="measure-1"></div>
          </div>
        </div>
      </div>

      <div className="right">
        Chat
      </div>
    </div>
  );
}

export default App;
