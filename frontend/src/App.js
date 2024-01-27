import './App.css';
import React from 'react';
import Home from './Screens/Home.jsx';
import LoginPage from "./Screens/LoginPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
    <Router>
    <ToastContainer />
      <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/Home" element={<Home/>} />
      </Routes>
  </Router>
  </>
  );
};

export default App;
