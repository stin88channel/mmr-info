import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import HowItWork from './pages/HowItWorks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={
      <App />
    }/>
    <Route path='/how-it-works' element={
      <HowItWork />
    } />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)