import React from 'react';
import './App.css';
import Props from './Props';

function App() {
  return (
    <div className="App">
      {/* Step 1 : Pass Data to component */}
      <Props name='Athar'/>
      {/* Step 1 : Write Html in side the component   */}
      <Props >
        <h1> And I am a react developr</h1>
      </Props>
    </div>
  );
}

export default App;
