import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [num, setNum] = useState();

  useEffect( ()=>{

    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res);
      setNum(res.data.name);
    }

    getData();
  })

  return (
   <>
      <h1> You choose {num}</h1>
      <h2> Pokemon name is {num}</h2>
     <select value={num} onChange={(event)=>{
       setNum(event.target.value);
     }}>
       <option value="1">1</option>
       <option value="25">25</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
     </select>
   </>
  );
}

export default App;
