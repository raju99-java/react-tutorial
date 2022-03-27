//import React from 'react';
import React, { useState } from 'react';

const App = () =>{
  //const state = useState();

  let time = new Date().toLocaleTimeString();

  const [curTime, setTime] = useState(time);

  function UpdateTime(){
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(UpdateTime,1000);

  return (
    <>
    <h1>{curTime}</h1>
    </>
  );
};

export default App;