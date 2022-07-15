import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const EditTodo = () => {
    const [singleTodo, setSingleTodo] = useState({});
    const {id} = useParams();

    const getSingleTodo = () => {
        axios.get(`http://localhost:8080/todos/${id}`)
        .then((r : AxiosResponse) => {
            const {data} =r;
            setSingleTodo(data);
            
        })
    }
    
    useEffect(() => {
        getSingleTodo();
    },[]);


    const handleChange = () => {
        
    }

  return (
    <div>
        <h2>Change your Todo</h2>
        <form onSubmit={handleChange}>
            <div>
                <label>title : </label>
                <input type="text" />
            </div>
            <div>
                <label>status : </label>
                <input type="boolean" />
            </div>
            <button type='submit'>Change</button>
        </form>
    </div>
  )
}

export default EditTodo