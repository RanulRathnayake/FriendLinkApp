import React from "react";
import {Link} from "react-router-dom";

const Login = ()=>{
    return(
        <div className="mycard">
            <div className="card auth-card">
                <h2>Instagram</h2>
                <input
                type="text"
                placeholder="E-mail"
                />
                <input
                type="text"
                placeholder="Passwaord"
                />
                <button className="btn waves-effect waves-light" >
                    Login
                    {/* <i class="material-icons right">send</i> */}
                </button>
                <h6><Link to="/signup">Don't have an account</Link></h6>
                
            </div>
        </div> //try to use material ui
    )
}

export default Login