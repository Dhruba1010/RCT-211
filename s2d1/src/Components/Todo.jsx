import React from 'react'
import { useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../Redux/action';

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);

    useEffect(() => {
        dispatch(getTodos())
    },[dispatch])


  return (
    <div>
        <h1>Todo App</h1>
        <TodoInput />
        {todos?.map(t => (
            <TodoList key={t.id} {...t} />
        ))}
    </div>
  )
}

export default Todo