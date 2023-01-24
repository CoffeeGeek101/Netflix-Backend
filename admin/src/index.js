import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import {FileContextProvider} from './context/filesContext/FileContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
     <FileContextProvider>
      <App/>
     </FileContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);