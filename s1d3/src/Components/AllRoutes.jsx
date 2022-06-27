import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditTodo from './EditTodo';
import Home from './Home';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import SingleTodo from './SingleTodo';
import Todos from './Todos';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<PrivateRoute><Todos /></PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/todo/:id' element={<SingleTodo />} />
        <Route path='/todo/:id/edit' element={<EditTodo />} />
    </Routes>
  )
}

export default AllRoutes