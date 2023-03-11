import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StateProvider } from './utils/StateProvider';
import reducer, { initialState } from './utils/reducer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    
      <App />
  </StateProvider>
);
