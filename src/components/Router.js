import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';

const AppRouter = ({ isLoggedIn }) => {
  console.log('isLoggedIn', isLoggedIn);
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path='/' element={<Home />}></Route>
        ) : (
          <Route path='/' element={<Auth />}></Route>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
