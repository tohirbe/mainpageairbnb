import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GoogleOAuthProvider clientId="391966760109-vn3cv5qem3b52et0iroc1eghmaffr4mj.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
    </React.StrictMode>
  </BrowserRouter>
);


