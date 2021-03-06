import React from 'react';
import ReactDOM from 'react-dom';
// import dotenv from 'dotenv';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";



// TODO: wrap everything in Auth0

ReactDOM.render(
  <Auth0Provider
  domain={process.env.REACT_APP_DOMAIN_KEY}
    clientId={process.env.REACT_APP_CLIENT_KEY}
  redirectUri={window.location.origin}
  >

    <App />

  </Auth0Provider>,
  
  document.getElementById("root")
);
