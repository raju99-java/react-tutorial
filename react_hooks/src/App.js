//import React from 'react';
import React, { useState } from 'react';

const App = () =>{
    //const state = useState();

    const [count, setCount] = useState(0);

    function IncNum(){
        setCount(count + 1);
    }
    

    let time = new Date().toLocaleTimeString();
    const [curtime , setTime] = useState(time);

    function UpTime(){
        time = new Date().toLocaleTimeString();
        setTime(time);
    }
    
    return (
        <>
           <h1>{count}</h1>
           <button onClick={IncNum}>Click</button>

           <h1>{curtime}</h1>
           <button onClick={UpTime}>Current Time</button>
        </>
    );
};

export default App;