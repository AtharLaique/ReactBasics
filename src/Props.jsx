import React , {Component }from 'react';
//Step 2 : Receive Props here 
// const Props=(props)=>{
//     return(
//         <div>
//         {/* Step 3 : Use Props here */}
//         <h1> My Name is {props.name}</h1>
//          {/* Step 3 : Get Html using props.children property */}
//         {props.children}
//         </div>
//     ) 
// }
class Props extends Component{
    //Declare the state
    state={
        name:'Athar Laique'
    }
    render(){
        return(
        <div>
            {/* Received Props here*/}
            <h1>My Name is {this.props.name}</h1>
             {/* props.children*/}
             {this.props.children}
             {/* use acces state */}
             {this.state.name}
            </div>
            
        )
    }
}
export default Props;