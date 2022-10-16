import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootDiv = document.getElementById('root');
const root = ReactDOM.createRoot(rootDiv as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
