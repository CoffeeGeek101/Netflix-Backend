
import { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import style from "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, dispatch} = useContext(AuthContext);

    const handleClick = (e)=>{
        e.preventDefault();
        login({email, password}, dispatch);
    }

  return (
    <div className="login">
        <div className="login-container">
            <form className="login-form">
                <h2>WELCOME BACK!!</h2>
                <div className="form-element">
                <span className="lable-form">Email</span>
                <input type="email" required placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="form-element">
                <span className="lable-form">Password</span>
                <input type="password" required placeholder="Password" minLength={8} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <button className="log-btn" type="button"
                onClick={handleClick}
                disabled={isFetching}
                >Log in</button>
            </form>
        </div>
    </div>
  )
}
