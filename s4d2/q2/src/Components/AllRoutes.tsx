import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditTodo from './EditTodo';
import Todo from './Todo';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/todos/:id/edit' element={<EditTodo />} />
    </Routes>
  )
}

export default AllRoutes