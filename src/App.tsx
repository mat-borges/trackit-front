import './App.css'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import React from 'react'

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<></>} />
      <Route path="/about" element={<></>} />
      <Route element={<></>} />
    </Router>
  )
}

export default App
