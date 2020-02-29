import React from 'react';
import './App.css';
import Props from './Props';

function App() {
  return (
    <div className="App">
      {/* Step 1 : Pass Data to component */}
      <Props name='Athar'/>
    </div>
  );
}

export default App;
