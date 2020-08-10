import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Button title="안녕하세요" active={false} />
    </div>
  );
}

export default App;
