import React, { useState } from 'react';
import AppRouter from './Router';
import { authService } from '../fb';
console.log('authService', authService);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
