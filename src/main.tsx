// Browser entry point referenced by index.html.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Establish global colors and base styles before App.tsx loads its component CSS.
import './index.css'
import App from './App.tsx'

// React owns the empty #root element in index.html. The ! asserts that it exists.
// StrictMode runs extra development checks, including effect setup and cleanup.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
