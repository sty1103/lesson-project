import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import { createContext } from 'react';

interface IAppContext {
  osmd: OpenSheetMusicDisplay | null;
  setOsmd: Function;
  activeMeasure: number;
  setActiveMeasure: Function;
}

const props = {
  osmd: null,
  setOsmd: () => {},
  activeMeasure: -1,
  setActiveMeasure: () => {}
}

const AppContext = createContext<IAppContext>(props);

export default AppContext;