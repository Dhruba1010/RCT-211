import React from 'react'
import { useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../Redux/action';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(store => store);

    useEffect(() => {
        dispatch(getTodos());
    },[dispatch])

  return (
    <>
        {todos.isLoading && <div>...loading</div>}
        <div>
            <h2>Todos</h2>
            <TodoInput />
            {todos?.todos?.length && 
                todos?.todos?.map(t => {
                    return <TodoList key={t.id} {...t}/>
                })
            }
            
        </div>
    </>
  )
}

export default Todos