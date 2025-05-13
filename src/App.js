import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop'; // ✅ Import ScrollToTop

function App() {
  return (
    <>
      <ScrollToTop /> {/* ✅ Add ScrollToTop to apply on every route change */}
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
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
