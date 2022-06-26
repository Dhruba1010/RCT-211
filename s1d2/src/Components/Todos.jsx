import React from 'react'
import { useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../Redux/action';
import Total from './Total';


const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(store => store, shallowEqual);

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
        <div><Total /></div>
    </>
  )
}

export default Todos