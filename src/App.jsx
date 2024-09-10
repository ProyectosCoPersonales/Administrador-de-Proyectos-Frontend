import React from 'react';
import HomeP from './pages/home';
import Modal1 from './pages/modal';
import ProjectDetail from './pages/details';
import Auth from './pages/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {
        false ? <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeP/>} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/project/:projectId/issue/:issueId" element={<Modal1 />} />
          </Routes>
        </div> : <Auth />
      }
    </>
  );
}

export default App;