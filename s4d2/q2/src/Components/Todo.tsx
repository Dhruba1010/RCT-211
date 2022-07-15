import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList';
import axios, { AxiosResponse } from 'axios';

export interface ITodoItem {
    id:number;
    status:boolean;
    title:string;
    getTodos?: () => void;
}

const Todo = () => {
    const [todos, setTodos] = useState<ITodoItem[]>([]);

    const handleAdd = (title:string) => {
        const payload = {
            title, status:false
        }
        axios.post('http://localhost:8080/todos', payload)
        .then(getTodos);
    }


    const getTodos = () => {
        axios.get('http://localhost:8080/todos')
        .then((r : AxiosResponse<ITodoItem[]>) => {
            const {data} =r;
            setTodos(data);
        })
    }

    useEffect(() => {
        getTodos();
    },[]);

  return (
    <div>
        <h1>Todos</h1>
        <TodoInput onClick={handleAdd} />
        {todos?.length > 0 && todos?.map(t => {
            return <TodoList key={t.id} {...t} getTodos={getTodos} />
        })}
    </div>
  )
}

export default Todo;