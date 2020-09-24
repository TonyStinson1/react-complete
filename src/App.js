import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm  a React App</h1>
      <p>This is really working!</p>
      <Person name="Max" age={25} />
      <Person name="Stephanie" age={28} />
      <Person name="Harsh" age={30} />
    </div>
  );
}

export default App;
