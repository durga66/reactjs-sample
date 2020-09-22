// import React from 'react';
// export class UserInput extends React.Component{

//     state = {
//         name:"reactgo"
//     }
  
//     handleChange = (e) =>{
//       this.setState({
//           name: e.target.value
//       })
//     }
  
//      render(){
//       return(
//        <div>
//         <h1>{this.state.name}</h1>
//         <input type="text" onChange={this.handleChange} value={this.state.name} />
//        </div>
//       )
//      }
  
//   }
  
import React,{useState} from "react";

export function UserInput(){
   const [name,setName] = useState('');

  const handleChange = (e)=>{
     setName(e.target.value);
  }

 return (
     
   <div>
       <br/>
       <h2>Hooks Concept</h2>
     <input onChange={handleChange} placeholder="type anything" value={name} />
     <h1>{name}</h1>
   </div>
 )
}
