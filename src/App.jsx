import { useState } from 'react'
import { Link } from "react-router-dom"
import './App.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import GamePage from "./GamePage";

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/play' element={<GamePage />}/>
      </Routes>
    </Router>
  )
}

export default App
