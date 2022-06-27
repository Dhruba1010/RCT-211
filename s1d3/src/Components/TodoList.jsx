import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addTotalCompletedTodos, changeSingleTodoStatus, deleteSingleTodo, getTodos, reduceTotalCompletedTodos, reduceTotalTodos } from '../Redux/Todo/action';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdDoneAll } from 'react-icons/io';
import { MdRemoveDone } from 'react-icons/md';

const TodoList = ({id, title, status}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const toogleStatus = (id, newStatus) => {
    dispatch(changeSingleTodoStatus(id, newStatus))
  }

  const addComTodos = (c) => {
    dispatch(addTotalCompletedTodos(c))
  }

  const reduceComTodos = (c) => {
    dispatch(reduceTotalCompletedTodos(c))
  }

  const deleteTodo = (id) => {
    dispatch(deleteSingleTodo(id))
    dispatch(getTodos())
    dispatch(reduceTotalTodos(1))
    navigate('/todos')
  }

  return (
    <div style={{display:'flex', justifyContent:'flex-start', gap:'1rem',  width:'fit-content', margin:'auto', marginTop:'2rem'}}>
        <div >
          <Link to={`/todo/${id}`} style={{textDecoration:'none', color:'black' }}>
            {title}
          </Link>
        </div>
        {status ? <div>Completed</div> : <div>Incomplete</div>}
        {status ? <button onClick={() => {toogleStatus(id, !status); reduceComTodos(1) }}><MdRemoveDone /></button> : <button onClick={() => {toogleStatus(id, !status); addComTodos(1)}}><IoMdDoneAll /></button>}
        <div>
          <Link to={`/todo/${id}/edit`} style={{textDecoration:'none', color:'black' }}>
            <button><AiFillEdit /></button>
          </Link>
        </div>
        <div><button onClick={() => deleteTodo(id)}><RiDeleteBin6Line /></button></div>
    </div>
  )
}

export default TodoList