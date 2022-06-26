import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editSingleTodo } from '../Redux/action';
import { AiFillEdit } from 'react-icons/ai';

const EditTodo = () => {
  const {id} = useParams();
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editHandler = (id,text) => {
    dispatch(editSingleTodo(id,text));
    navigate('/');
  }

  return (
    <div style={{marginTop: '2rem'}}>
      <div>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
      <div>
      <h2>Edit Todo</h2>
        <input type="text" placeholder='Edit Your Task' value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => editHandler(id, text)}><AiFillEdit /></button>
      </div>
      <div>{text}</div>
    </div>
  )
}

export default EditTodo