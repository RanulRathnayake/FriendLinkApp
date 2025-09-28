import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext, } from "../App";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

    const {state,dispatch} = useContext(UserContext)
    const renderList = ()=>{
      if(state){
        return [
          <li><Link to="/profile">Profile</Link></li>,
          <li><Link to="/create">Create Post</Link></li>,
          <li>
            <button className="btn waves-effect waves-light #c62828 red darken-3"
              onClick={()=>{
                localStorage.clear()
                dispatch({type:"CLEAR"})
                navigate('/login')
              }}>
              Logout
            </button>
          </li>
        ]
      }else{
        return [
          <li><Link to="/login">Login</Link></li>,
          <li><Link to="/signup">Signup</Link></li>
        ]
      }
    }
    return (
        <nav>
        <div className="nav-wrapper">
          <Link to={state?"/":"/login"} className="brand-logo left">FriendLink</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {renderList()}
          </ul>
        </div>
      </nav>     
    );
    }

export default Navbar;