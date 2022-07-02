import React from 'react';
import ReactDOM from 'react-dom/client';
import EntryRoute from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <EntryRoute />
  </React.StrictMode>
);
