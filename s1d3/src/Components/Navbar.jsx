import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../Redux/Auth/action';

const Navbar = () => {
  const isAuth = useSelector(store => store.authReducer.isAuth)
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutSuccess())
  }

  return (
    <div style={{ width: '100%'}}>
        <div style={{display: 'flex', width:'50%', justifyContent:'space-around', margin: 'auto'}}>
            <div><Link to='/'>Home</Link></div>
            {isAuth ? (<div><button onClick={logoutHandler}>Logout</button></div>) : (<div><Link to='/login'><button>Login</button></Link></div>)}
            
        </div>
    </div>
  )
}

export default Navbar