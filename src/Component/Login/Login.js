import React, { useContext, useState } from 'react';
import { Authcontext } from '../../Context';
import Logoimg from '../image/logo.jpg';
function Login() {
    const authcontext = useContext(Authcontext);
    const setAccount = authcontext.setAccount;

    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");

    function lognin(e){
        e.preventDefault();
        if(username===""&&password===""){
            alert('Wrong Details')
        }else{
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
            setAccount({username,password})
            alert(" Welcome Back! ")
        }
    }

    return (<div  className="container">
        <section className="logintebale">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="login-header">
                            <img src={Logoimg}/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="loginbody">
                                <h4>Login</h4>
                                <div className="formlogn">
                                    <form>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="User Name"
                                                value={username} onChange={e=> setusername(e.target.value)}/>
                                        </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            placeholder="Password" value={password} 
                                            onChange={e=> setpassword(e.target.value)}/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label">Remember me</label>
                                    </div>
                                        <button type="submit" className="btn butonlogin" onClick={lognin}>
                                        Login
                                        </button>
                                    </form>
                                </div>
                        </div>
                    </div>

                </div>

        </section></div>)
}

export default Login;
