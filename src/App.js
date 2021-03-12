import React from 'react';
import './App.css';

import AccountBalance from './components/AccountBalance';

const App = () => {
  
  return (
    <div data-test="app-component" className="app container">
      <div className="section">
        <h1 className="has-text-centered title is-1">
          Welcome in the personal finance app!
        </h1>
        <AccountBalance />
      </div>
    </div>
  );
};

export default App;
