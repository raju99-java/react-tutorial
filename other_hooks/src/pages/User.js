import { useParams, useLocation, useHistory } from "react-router-dom";

const User =() =>{

    const {name, age} = useParams();
    
    const location = useLocation();

    const history = useHistory();

    return (
        <>
            <h1>useLocation Hooks</h1>
            <p>URL : {location.pathname}</p>

            <hr/>
            
            <h1>useParams Hooks</h1>
            <h3>User {name} Page . age is {age}</h3>

            <hr/>

            <h1>useHistory Hooks</h1>
            {location.pathname === `/user/raju/22` ?
                ( <button onClick={()=> history.goBack()}> 
                     Go Back
                  </button> ) : null
            }
           

        </>
    )
}

export default User;