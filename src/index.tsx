import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './App';
import reportWebVitals from './reportWebVitals';
import { LoadingComponent } from './views/common-components';
import { initialization } from './initialization';
import { ErrorPage } from './views/pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

root.render(
  <React.StrictMode>
    <LoadingComponent message="Application Loading...." />
  </React.StrictMode>,
);

initialization()
  .then(([userData, staticData]) => {
    root.render(
      <React.StrictMode>
        <Application userData={userData} staticData={staticData} />
      </React.StrictMode>,
    );
  })
  // eslint-disable-next-line no-unused-vars
  .catch((error) => {
    root.render(
      <React.StrictMode>
        <ErrorPage />
      </React.StrictMode>,
    );
  });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
