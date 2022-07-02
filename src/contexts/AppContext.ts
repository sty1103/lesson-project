import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import { createContext } from 'react';

interface IAppContext {
  osmd: OpenSheetMusicDisplay | null;
  setOsmd: Function;
}

const AppContext = createContext<IAppContext>({ osmd: null, setOsmd: () => {} });

export default AppContext;