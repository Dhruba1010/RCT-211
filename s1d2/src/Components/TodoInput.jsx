import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid'; 
import { addTodo } from '../Redux/action';

const TodoInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        const payload = { id:uuid(), title:text, status:false }
        dispatch(addTodo(payload))
        setText('')
    }

  return (
    <div>
        <input type="text" placeholder="Add Something..." value={text} onChange={e => setText(e.target.value)} />
        <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default TodoInput