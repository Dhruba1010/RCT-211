import React from 'react'
import { ITodoItem } from './Todo';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete, MdDoneAll, MdRemoveDone } from 'react-icons/md';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TodoList = ({id,title,status,getTodos} : ITodoItem) => {

  const handleDelete = () => {
    if(id){
      axios.delete(`http://localhost:8080/todos/${id}`)
      .then(getTodos)
    }
  }

  const handleStatus = () => {
    if(status){
      const payload = {
        status: false
      }
      axios.patch(`http://localhost:8080/todos/${id}`, payload)
      .then(getTodos)
    }else{
      const payload = {
        status: true
      }
      axios.patch(`http://localhost:8080/todos/${id}`, payload)
      .then(getTodos)
    }
  }

  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', gap:'1rem', width: '25rem', margin:'auto', marginTop:'2rem'}}>
        <span>{title} - </span>
        <span>{status ? 'Done' : 'Not Done'}</span>
        <span>{status ? <button onClick={handleStatus} ><MdRemoveDone /></button> : <button onClick={handleStatus} ><MdDoneAll /></button>}</span>
        <span><Link to={`/todos/${id}/edit`}><button><AiFillEdit /></button></Link></span>
        <span><button onClick={handleDelete}><MdDelete /></button></span>
    </div>
  )
}

export default TodoList