import React, { useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fb';
// console.log('authService', authService);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
