//Step 1 : import useState
import React ,{useState}from 'react';
import './App.css';
import Props from './Props';

function App() {
  //Declare the state
  const[nameOfstate , methodToSetstate]=useState({name:'Athar from functional state'});
  const update=()=>{
    //Update state here
   methodToSetstate({name:' Athar Laique'})
}
  return (
    <div className="App">
      {/* Step 1 : Pass Data to component */}
      {/* use of state */}
      <Props name={nameOfstate.name} />
      <button onClick={update}> update state</button>
    </div>
  );
}

export default App;


