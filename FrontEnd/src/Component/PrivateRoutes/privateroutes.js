import { useAuth } from "../../Context/LoginContext";
import {Route,Navigate} from "react-router-dom";


export function PrivateRoute({path, ...props}){
    const {login} = useAuth();

    return login ? <Route path={path} {...props}/>:<Navigate state={{from:path}} replace to='/login'/>;
    

  } 