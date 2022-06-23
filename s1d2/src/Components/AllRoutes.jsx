import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditTodo from './EditTodo';
import SingleTodo from './SingleTodo';
import Todos from './Todos';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Todos />} />
        <Route path='/todo/:id' element={<SingleTodo />} />
        <Route path='/todo/:id/edit' element={<EditTodo />} />
    </Routes>
  )
}

export default AllRoutes