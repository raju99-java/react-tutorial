import {Route, Switch} from 'react-router-dom';
import Menu from './Menu';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import User from './pages/User';


function ParamsHook() {
    return (
     <>
          <Menu/>

          <Switch>
              <Route exact path="/" component={About} />
         
              <Route exact path="/services" component={Services} />

              <Route exact  path="/user" component={User} />
         
              <Route exact  path="/user/:name/:age" component={User} />
         
              <Route exact path="/contact" component={Contact} />
          </Switch>
     </>
    );
  }
  
  export default ParamsHook;