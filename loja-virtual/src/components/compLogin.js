import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function Login(){
     const [login, setlogin] = useState('')
     const usuario = 'usuario';
     const senha = 'senha';
     const button = <Link to='/shopcar'>Shopcar</Link>;
     const click = useCallback(() =>{
          setlogin()
          if(usuario==="Lucas Brasil",senha==="galickhou") return button==='log' ; else{return alert("Usuario ou senha invalidos")}
     }, [login])
     return(
          <div>
               <div className='login'>
                    <h1>Login</h1>
                    <div id="info">
                         <h3>Username</h3>
                         <input id='usuario' type='text'></input>
                         <h3>Password</h3>
                         <input id='senha' type='password'></input>
                    </div>
                    <button onClick={click} id="log" type='button'>Login</button>
               </div>
          </div>
     )
}

export default Login;