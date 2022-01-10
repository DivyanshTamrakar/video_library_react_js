import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";


// export function PrivateRoute({path, ...props}){
//     const {login} = useAuth();

//     return login ? <Route path={path} {...props}/>:<Navigate state={{from:path}} replace to='/login'/>;


//   } 


export function PrivateRoute({ children }) {
  const { login } = useAuth();
  return login ? children : <Navigate to="/login" />;
}