import React from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details" element={<Details />} /> 
    </Routes>
  </Router>)
};

export default App;

