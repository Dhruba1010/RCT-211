import React from 'react'
import useFetch from '../hooks/useFetch'

const ShowUsers = () => {
    const {loading, data, error} = useFetch('https://api.github.com/search/users?q=masai');

    console.log(data);

  return (
    <>
        <h2>Users List</h2>
        {loading && 'Loading...'}
        {error && 'Something went wrong'}
        {data?.map(d => {
            return (
                <div key={d.id}><h4>{d.login}</h4></div>
            )
        })}
    </>
  )
}

export default ShowUsers