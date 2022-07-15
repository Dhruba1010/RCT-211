import React, { useState } from 'react';

interface ITodoInput {
    onClick: (v:string) => void;
}

const TodoInput = ({onClick}:ITodoInput) => {
    const [text, setText] = useState('');

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value);
    }

    const handleAdd:React.MouseEventHandler<HTMLButtonElement> = () => {
        onClick(text);
    }

  return (
    <div>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput