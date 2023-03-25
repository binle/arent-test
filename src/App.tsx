import { StrictMode, Suspense, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationContext, defaultContext } from './data';
import { IApplicationContextData } from './definitions';

import './styles/css/app.scss';
import { LoadingComponent } from './views/common-components';
import { AppRouter } from './views/router';

const App = (props: IApplicationContextData) => {
  const [appState, setAppState] = useState<IApplicationContextData>({ ...defaultContext, ...props });

  return (
    <Suspense fallback={<LoadingComponent message="Page is loading...." />}>
      <StrictMode>
        <BrowserRouter>
          <ApplicationContext.Provider value={{ contextData: appState, setContextData: setAppState }}>
            <AppRouter accountInfo={appState.userData?.accountInfo} />
          </ApplicationContext.Provider>
        </BrowserRouter>
        <LoadingComponent message="..." />
      </StrictMode>
    </Suspense>
  );

  // return (
  //   <ApplicationContext.Provider
  //     value={{ contextData: appState, setContextData: setAppState }}
  //   ></ApplicationContext.Provider>
  // );
};

export default App;
