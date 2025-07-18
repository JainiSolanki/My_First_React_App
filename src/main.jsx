import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

  //<StrictMode>
  //  <App />
  //</StrictMode>
  const root = ReactDom.createRoot(document.getElementById('root'));
  function tick() {
    const element = (
      <div style={{color:'blueviolet'}}>
        <h1>Welcome to CHARUSAT</h1>
        <h2>It is {new Date().toLocaleDateString()}</h2>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
      </div>
    )
    root.render(element);
  }
  setInterval(tick,1000);
