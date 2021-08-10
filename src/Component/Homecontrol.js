import React, { useContext } from 'react';
import { Authcontext } from '../Context';
import Home from './Home/Home';
import './Homecontrol.css';
import Login from './Login/Login';

function Homecontrol() {
    const authcontext = useContext(Authcontext);
    const account = authcontext.account;
    return (
        <div>
            {account.username?<Home/>:<Login/>}
        </div>
    )
}

export default Homecontrol;


