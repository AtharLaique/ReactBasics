import React from 'react';
//Step 2 : Receive Props here 
const Props=(props)=>{
    return(
        <div>
        {/* Step 3 : Use Props here */}
        <h1> My Name is {props.name}</h1>
         {/* Step 3 : Get Html using props.children property */}
        {props.children}
        </div>
    ) 
}
export default Props;