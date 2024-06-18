import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <Auth0Provider
      domain='utntestrecursivos.us.auth0.com'
      clientId='skPG8OX4quDyHH7DEYHOPR5j6afDmsMg'
      authorizationParams={{
        redirect_uri: window.location.origin, 
        audience:"http://localhost:9000",
        scope: "read:current_user",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
