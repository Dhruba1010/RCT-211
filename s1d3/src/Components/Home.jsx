import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Todo App</h1>
        <Link to='/todos'><h2>Todo Lists</h2></Link>
    </div>
  )
}

export default Home