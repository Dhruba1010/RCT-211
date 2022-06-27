import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = ({title}) => {
    const status = useSelector(store => store);

  return (
    <>
        {status?.isLoading && <div>...loading</div>}
        {status?.isError && <div>Something went wrong...</div>}
        <div>
            <h3>{title}</h3>
        </div>
    </>
  )
}

export default TodoList