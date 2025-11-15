import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import globalStore from "./Reduxtoolkit/globalState.js";
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={globalStore}>   {/* 👈 this is important */}
      <App />
    </Provider>
  </StrictMode>,
)
