import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        {Array.from(new Array(100), (_, index) => index + 1).map((num) => (
          <div className={num % 2 === 0 ? 'highlight' : ''}>item {num}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
