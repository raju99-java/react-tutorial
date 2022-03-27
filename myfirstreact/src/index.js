import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const fname = 'Raju';
const lname = 'Debnath';

const inlineCss = {
      color : 'blue',
      fontFamily: '"Josefin Sans" , sans-serif',
};

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

const img1 = "https://picsum.photos/seed/picsum/200/300";
const links = "https://picsum.photos";

ReactDOM.render(
    <React.Fragment>
    <h1 className="h1" >Hello Raju</h1>
    <p style={inlineCss}>{`Hi, I am ${fname} ${lname}`}</p>
    <p>My lucky number is {2+5}</p>
    <ul>
        <li>raju</li>
        <li>karno</li>
        <li>akash</li>
    </ul>
    <h3>Hi, my name is {fname} {lname}</h3>
    <p>Current Date : {currentDate}</p>
    <p>Current Time : {currentTime}</p>

    <div className="img_div">
    <a href={links} target="_blank">
    <img src= {img1} alt="random"/>
    </a>
    </div>

    </React.Fragment>,
    document.getElementById('root'));