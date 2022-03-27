import React, { createContext } from 'react';
import CompA from './CompA';

const fname = createContext();
const lname = createContext();

const App = ()=>{
  return (
   <>
        <fname.Provider value={"Raju"}>
            <lname.Provider value={"Debnath"}>
              <CompA/>
            </lname.Provider>
        </fname.Provider>
     
   </>
  );
}

export default App;
export {fname, lname};
