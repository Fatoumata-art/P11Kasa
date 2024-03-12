import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './components/footer'
import Header from './components/header'
import './index.css'
import { BrowserRouter } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
