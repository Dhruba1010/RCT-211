import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, addTotalTodos } from '../Redux/Todo/action';
import { v4 as uuid } from 'uuid';
import { GrAdd } from 'react-icons/gr';

const TodoInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        const payload = { id:uuid(), title:text, status:false }
        dispatch(addTodo(payload))
        dispatch(addTotalTodos(1))
        setText('')
    }

  return (
    <div>
        <input type="text" placeholder="Add Something..." value={text} onChange={e => setText(e.target.value)} />
        <button onClick={handleAdd}><GrAdd /></button>
    </div>
  )
}

export default TodoInput