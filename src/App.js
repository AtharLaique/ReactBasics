//Step 1 : import useState
import React ,{useState}from 'react';
import './App.css';
import Props from './Props';

function App() {
  //Declare the state
  const[nameOfstate , methodToSetstate]=useState({name:'Athar'})
  return (
    <div className="App">
      {/* Step 1 : Pass Data to component */}
      <Props />
    </div>
  );
}

export default App;
