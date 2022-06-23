import React from 'react'

const TodoList = ({title, status}) => {
  return (
    <div style={{display:'flex', justifyContent:'flex-start', gap:'1rem',  width:'fit-content', margin:'auto', marginTop:'2rem'}}>
        <div>{title}</div>
        {status ? <div>Completed</div> : <div>Incomplete</div>}
        {status ? null : <button>Mark as complete</button>}
        <div><button>Edit</button></div>
        <div><button>Remove</button></div>
    </div>
  )
}

export default TodoList