
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';

const Routers = () => {
  return (
    <div>

      <Router>
        <Routes>

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />


        </Routes>

      </Router>




    </div>
  )
}

export default Routers