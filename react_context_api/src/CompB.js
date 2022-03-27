import CompC from "./CompC";
import { fname,lname } from "./App";
import { useContext, useEffect, useState } from "react";

const CompB = ()=>{

    const firstName = useContext(fname);
    const lastName = useContext(lname);

    const [num, setNum] = useState(0);

    useEffect(()=>{
        document.title= `You click ${num} times`
    },[num])

    return (
        <>
            <CompC/>

            <hr/>

            <h3>useContext to simplify the Context-API</h3>
            <h5>My Name is {firstName} {lastName}</h5>

            <hr/>

            <h3>useEffect</h3>

            <button onClick={()=>{
                setNum(num+1)
            }}>
            Click Me {num}
            </button>

        </>
    )
}

export default CompB;