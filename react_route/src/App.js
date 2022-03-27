
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>

      <Navbar/>

      <Switch>
        <Route exact path='/' component={About}/>

        <Route path='/contact' render={ ()=>    // when you passing props
            <Contact name='contact'/>           // should use render avoid
          }                                     // component
        />

        <Route component={Error}/>
      </Switch>
      
    </>
  );
}

export default App;
