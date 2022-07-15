import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth } from '../Redux/authReducer/action';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password){
      dispatch(getAuth({email, password}))
    }
    if(location.state?.from){
      navigate(location.state.from)
    }
    // navigate('/books/:id/edit')
  }

  return (
    <div>
      <h2>Fill your login credentials</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPass(e.target.value)} />
        </div>
        <button type='submit'>LOGIN</button>
      </form>
    </div>
  )
}

export default Login