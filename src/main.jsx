import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootswatch/dist/morph/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // JS de Bootstrap y Popper.js
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
