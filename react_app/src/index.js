import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date();
curDate = curDate.getHours();

let greeting = '';
const cssStyle = {};

if(curDate >= 4 && curDate < 12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}else if(curDate >= 12 && curDate <= 19){
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
}else{
  greeting = 'Good Night';
  cssStyle.color = 'black';
}


ReactDOM.render(
  <>
    <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
  </>,
    document.getElementById('root')
);