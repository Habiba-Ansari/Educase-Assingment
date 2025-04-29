import React, { useState } from 'react';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Account from './components/Account';
import Login from './components/Login';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      {currentPage === 'home' && (
        <Home 
          onCreateAccount={() => setCurrentPage('create')} 
          onLogin={() => setCurrentPage('login')} 
        />
      )}
      {currentPage === 'create' && <CreateAccount setCurrentPage={setCurrentPage} />}
      {currentPage === 'account' && <Account />}
      {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
      
    </div>
  );
};

export default App;
