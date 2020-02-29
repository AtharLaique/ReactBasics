import React from 'react';
//Step 2 : Receive Props here 
const Props=(props)=>{
    return(
        <div>
        {/* Step 3 : Use Props here */}
        <h1> My Name is {props.name}</h1>
        </div>
    ) 
}
export default Props;