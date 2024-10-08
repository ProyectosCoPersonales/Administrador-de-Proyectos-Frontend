import React from 'react'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
