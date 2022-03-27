import React from 'react';
import { useState } from 'react/cjs/react.development';

const App = () =>{

      const [fullName, setFullName] = useState({
            fname : "",
            lname : "",
            email : "",
            });
  

      function inputEvent(event){
          const {value,name} = event.target;

          setFullName((preValue)=>{
               return {
                 ...preValue,
                 [name] : value,
               };
          });
      }

      function onSubmits(event){
         event.preventDefault();
         alert('submitted')
      }
  
  return (
    <>
      <div className="main_div">
      <form onSubmit={onSubmits}>
      <div>
        <h1>Hello {fullName.fname} {fullName.lname}</h1>
        <br/>

        <h4>{fullName.email}</h4>

        <input type="text" placeholder="Enter your first name"
          name="fname" 
          onChange={inputEvent} 
          value={fullName.fname}/>
         <br/>

         <input type="text" placeholder="Enter your last name"
           name="lname" 
           onChange={inputEvent} 
           value={fullName.lname}/>
         <br/>

         <input type="email" placeholder="Enter your email"
           name="email" 
           onChange={inputEvent} 
           value={fullName.email}/>
         <br/>

        <button type="submit">
          submit 
        </button>  
        
      </div>
      </form>
      </div>
    </>
  );

};

export default App;