import { fname,lname } from "./App";

const CompC = ()=>{
    return (
        <>
           <h1>React Context-API</h1>

            <fname.Consumer>
               {(fname)=>{

                  return (
                      <lname.Consumer>
                          {(lname)=>{
                              return (<h1>My name is {fname} {lname}</h1>);
                          }}
                      </lname.Consumer>
                  );
                     
                }}
            </fname.Consumer>
           
        </>
    )
}

export default CompC;