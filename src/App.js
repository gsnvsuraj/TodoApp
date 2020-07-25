import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Main from './Component/main';
import DarkMode from './Component/darkmode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
      </header>

      <DarkMode />

      <div className="App-body">
        <Main />
      </div>

    </div>
  );
}

export default App;
