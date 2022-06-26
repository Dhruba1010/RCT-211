import React from 'react'
import { useSelector } from 'react-redux'

const Total = () => {
    const store = useSelector(store => store);

  return (
    <div>
        <h4>Total Todos : {store.totalTodos}</h4>
        <h4>Completed Todos : {store.completedTodos}</h4>
    </div>
  )
}

export default Total