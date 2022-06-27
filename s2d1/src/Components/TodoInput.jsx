import React from 'react'
import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodos } from '../Redux/action';

const TodoInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handlerSubmit = () => {
        const payload = { id:uuid(), title:text, status:false }
        dispatch(addTodos(payload))
        setText('')
    }

  return (
    <div>
        <input type="text" placeholder="Add Something..." value={text} onChange={e => setText(e.target.value)} />
        <button onClick={handlerSubmit}>ADD</button>
    </div>
  )
}

export default TodoInput