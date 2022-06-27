import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthToken } from '../Redux/Auth/action';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch();
    const isAuth = useSelector(store => store.authReducer.isAuth)

    const loginHandler = () => {
        const payload = {email: email, password: pass}
        dispatch(getAuthToken(payload))
    }


  return (
    <>
      {isAuth ? (<h3>Succesfully Logged In</h3>) : (
        <div>
            <input type="email" placeholder='Emaill' value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={pass} onChange={e => setPass(e.target.value)} />
            <button onClick={loginHandler}>Login</button>
        </div>
      )}
    </>
  )
}

export default Login