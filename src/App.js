import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import DataEngineering from './pages/DataEngineering';
import SoftwareEngineering from './pages/SoftwareEngineering';
import DevOpsExperience from './pages/DevOpsExperience';
import SDLC from './pages/SDLC';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/data-engineering" element={<DataEngineering />} />
          <Route path="/software-engineering" element={<SoftwareEngineering />} />
          <Route path="/devops-experience" element={<DevOpsExperience />} />
          <Route path="/sdlc" element={<SDLC />} />       
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
