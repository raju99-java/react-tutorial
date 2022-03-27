import {NavLink} from 'react-router-dom';

const Menu =()=>{
    return (
        <>
            <NavLink exact activeClassName="active" to="/">
                About
            </NavLink>  <hr/>

            <NavLink exact activeClassName="active" to="/services">
                Services
            </NavLink>   <hr/>

            <NavLink exact activeClassName="active" to="/user">
                User
            </NavLink>   <hr/>

            <NavLink exact activeClassName="active" to="/contact">
                Contact
            </NavLink>   <hr/>
        </>
    )
}

export default Menu;