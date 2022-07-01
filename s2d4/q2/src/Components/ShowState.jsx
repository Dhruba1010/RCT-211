import React from 'react'
import useTimeout from '../hooks/useTimeout'

const ShowState = () => {
    const ready = useTimeout(5000);

  return (
    <div>
        {ready ? <h3>Ready</h3> : <h3>Not Ready</h3>}
    </div>
  )
}

export default ShowState