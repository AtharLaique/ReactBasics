//Step 1 : import useState
import React ,{useState}from 'react';
import './App.css';
import Props from './Props';

function App() {
  //Declare the state
  const[nameOfstate , methodToSetstate]=useState({name:'Athar from functional state'})
  return (
    <div className="App">
      {/* Step 1 : Pass Data to component */}
      {/* use of state */}
      <Props name={nameOfstate.name} />
    </div>
  );
}

export default App;
