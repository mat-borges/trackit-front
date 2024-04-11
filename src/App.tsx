import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import GlobalStyle from './assets/styles/GlobasStyle';
import React from 'react';
import SignUpPage from './pages/SignUp';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/habits" element={<></>} />
        <Route path="/today" element={<></>} />
        <Route path="/history" element={<></>} />
      </Routes>
    </Router>
  );
};

export default App;
