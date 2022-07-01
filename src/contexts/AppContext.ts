import React, { createContext } from 'react';

interface IAppContext {
  osmd: Object
}

const AppContext = createContext<IAppContext>({ osmd: {} });

export default AppContext;