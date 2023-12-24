import React from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";


function Login() {
  return (
    <div className='login'>
        <Link to='/'>
        <img 
        className="login__logo"
        src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
        />
        </Link>

        <div className='login__container'>
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text'/>

                <h5>Password</h5>
                <input type='text' />
            </form>
        </div>
    </div>
  )
}

export default Login