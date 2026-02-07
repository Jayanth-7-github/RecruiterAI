import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import JobDetails from './pages/JobDetails';
import Jobs from './pages/Jobs';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/edit-job/:id" element={<EditJob />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
