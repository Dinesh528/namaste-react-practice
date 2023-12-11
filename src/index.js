import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './App';
import { Provider } from 'react-redux';
import appStore from './appStore/appStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <React.StrictMode>
    <RouterProvider router={appRouter}/>
    </React.StrictMode>
  </Provider>
);


reportWebVitals();
