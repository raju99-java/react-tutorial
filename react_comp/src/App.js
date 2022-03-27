
import Heading from './Heading';
//import * as List  from './List';
import List, {youtuber, Gamer} from './List';
import {add, sub, div, mul} from './Calculator'; 


function App(){
    return (
        <>
        <Heading/> 
        <Heading/>
        <Heading/>
        <Heading/>
        <List/>
        <List/>
        <List/>
        <h1>{youtuber}</h1>
        <h2>{Gamer()}</h2>
        <ul>
            <ol>Addition is {add(40,4)}</ol>
            <ol>Subtraction is {sub(40,20)}</ol>
            <ol>Division is {div(40,11)}</ol>
            <ol>Multiplication is {mul(40,4)}</ol>
        </ul>
        </>
    );
}

export default App;