import React from 'react'
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteSingleTodo, getSingleTodo, reduceTotalTodos } from '../Redux/action';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import ErrorPage from './ErrorPage';

const SingleTodo = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const curTodo = useSelector(store => store.curTodo, shallowEqual);
  const error = useSelector(store => store.error)
  const navigate = useNavigate();

  useEffect(() => {
    if(id){
      dispatch(getSingleTodo(id))
    }
  },[dispatch,id])

  const deleteTodo = (id) => {
    dispatch(deleteSingleTodo(id))
    dispatch(reduceTotalTodos(1))
    navigate('/')
  }


  return (
    <>
      {error ? (<ErrorPage />) : (
        <div>
          <h2>Todo Details</h2>
          <div style={{marginTop:'2rem', border:'1px solid red', width: 'fit-content', margin:'auto', padding: '1rem 2rem'}}>
            <h3>{curTodo?.title}</h3>
            {curTodo?.status ? <p>Completed</p> : <p>Incomplete</p>}
            <Link to={`/todo/${id}/edit`} style={{textDecoration:'none', color:'black' }}>
              <button><AiFillEdit /></button>
            </Link>
            <button onClick={() => deleteTodo(id)}><RiDeleteBin6Line /></button>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleTodo