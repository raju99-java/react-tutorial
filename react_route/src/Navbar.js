import {NavLink} from 'react-router-dom';

const Navbar = ()=>{
    return (
        <>
          <NavLink exact activeClassName="active_class" to="/">
            About Us
          </NavLink>

          <br/>

          <NavLink exact activeClassName="active_class" to="/contact">
            Contact Us
          </NavLink>
           
        </>
    )
}

export default Navbar;