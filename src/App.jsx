import { Routes, Route }from 'react-router-dom';
import Home from './pages/home.jsx'
import './App.css'

import NotFound from './pages/notFound.jsx'
import About from './pages/about.jsx'
import Appartement from './pages/appartement.jsx';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/appartement/:id" element={<Appartement />} />
        <Route path="*" element={<NotFound />} />
       
      </Routes>
  );
}


   


export default App
