
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './input.css'
import App from './App.jsx'
import { DataProvider } from './Context/DataContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App  />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>,
)
