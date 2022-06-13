import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

ReactDOM.render(
  <React.StrictMode>
   
   <App/>
  
      
   
  </React.StrictMode>,
  document.getElementById('root')
);